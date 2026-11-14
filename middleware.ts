import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

const publicRoutes = ["/", "/login", "/register", "/forgot-password", "/reset-password", "/auth/callback"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicPath = publicRoutes.some((route) => pathname === route || pathname.startsWith("/auth"));

  const response = NextResponse.next({ request: { headers: request.headers } });
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    },
  );

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (pathname.startsWith("/app") && !user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if ((pathname === "/login" || pathname === "/register" || pathname === "/forgot-password" || pathname === "/reset-password") && user) {
      return NextResponse.redirect(new URL("/app", request.url));
    }

    if (!isPublicPath && !pathname.startsWith("/_next") && !pathname.startsWith("/favicon")) {
      return response;
    }

    return response;
  } catch {
    if (pathname.startsWith("/app")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return response;
  }
}

export const config = {
  matcher: ["/((?!api/|_next/static|_next/image|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
