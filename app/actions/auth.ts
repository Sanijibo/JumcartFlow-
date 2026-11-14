"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createServerSupabaseClient, getAuthenticatedUser } from "@/lib/supabase/server";
import { loginSchema, onboardingSchema, registrationSchema, resetPasswordSchema, updatePasswordSchema } from "@/lib/validations";

type ActionResponse = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

function toFieldErrors<T extends z.ZodTypeAny>(result: z.SafeParseError<T["_input"]>) {
  return result.error.flatten().fieldErrors;
}

export async function registerMerchant(_prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const parsed = registrationSchema.safeParse({
    fullName: formData.get("fullName"),
    businessName: formData.get("businessName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: toFieldErrors(parsed),
    };
  }

  const { fullName, businessName, email, password } = parsed.data;
  const supabase = await createServerSupabaseClient();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${appUrl}/auth/callback`,
      data: {
        full_name: fullName,
        business_name: businessName,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/login?registered=1");
}

export async function loginMerchant(_prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: toFieldErrors(parsed),
    };
  }

  const { email, password } = parsed.data;
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/app");
}

export async function logoutMerchant() {
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function requestPasswordReset(_prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const parsed = resetPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: toFieldErrors(parsed),
    };
  }

  const { email } = parsed.data;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${appUrl}/reset-password`,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Password reset instructions have been sent to your email.",
  };
}

export async function updateUserPassword(_prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const parsed = updatePasswordSchema.safeParse({
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: toFieldErrors(parsed),
    };
  }

  const user = await getAuthenticatedUser();
  if (!user) {
    redirect("/login");
  }

  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.updateUser({
    password: parsed.data.password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect("/app");
}

export async function completeOnboarding(_prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect("/login");
  }

  const parsed = onboardingSchema.safeParse({
    businessName: formData.get("businessName"),
    businessEmail: formData.get("businessEmail"),
    country: formData.get("country"),
    businessCategory: formData.get("businessCategory"),
    currency: formData.get("currency"),
    contactName: formData.get("contactName"),
    contactPhone: formData.get("contactPhone"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: toFieldErrors(parsed),
    };
  }

  const supabase = await createServerSupabaseClient();
  const { data: business, error: businessError } = await supabase
    .from("businesses")
    .insert({
      business_name: parsed.data.businessName,
      business_email: parsed.data.businessEmail,
      country: parsed.data.country,
      category: parsed.data.businessCategory,
      currency: parsed.data.currency,
      contact_name: parsed.data.contactName,
      contact_phone: parsed.data.contactPhone,
      owner_user_id: user!.id,
    })
    .select()
    .single();

  if (businessError) {
    return {
      success: false,
      message: businessError.message,
    };
  }

  const { error: memberError } = await supabase.from("business_members").insert({
    business_id: business.id,
    user_id: user!.id,
    role: "owner",
  });

  if (memberError) {
    return {
      success: false,
      message: memberError.message,
    };
  }

  redirect("/app");
}
