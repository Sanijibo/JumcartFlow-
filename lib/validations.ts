import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  businessName: z.string().trim().min(2, "Business name is required."),
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Please confirm your password."),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match.",
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(8, "Password must contain at least 8 characters."),
});

export const onboardingSchema = z.object({
  businessName: z.string().trim().min(2, "Business name is required."),
  businessEmail: z.string().trim().email("Business email is required."),
  country: z.string().trim().min(2, "Country is required."),
  businessCategory: z.string().trim().min(2, "Business category is required."),
  currency: z.string().trim().min(3, "Currency is required."),
  contactName: z.string().trim().min(2, "Contact name is required."),
  contactPhone: z.string().trim().min(7, "Contact phone is required."),
});

export const resetPasswordSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
});

export const updatePasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Please confirm your password."),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match.",
});
