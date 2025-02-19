import { resend } from "./config.js";
import {
  verificationTokenEmailTemplate,
  WELCOME_EMAIL_TEMPLATE,
} from "./email-templates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  console.log("Preparing to send verification email...");
  console.log("Email:", email);
  console.log("Verification Token:", verificationToken);

  try {
    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Verify Your Email Address Now",
       html: "This is a test email.",
    });

    // Log the full response from the email service
    console.log("Email service response:", response);

    // Check for errors in the response
    if (!response || response.error) {
      console.error("Error sending email:", response ? response.error : "No response received");
      throw new Error("Error sending verification email");
    } else {
      console.log("Email sent successfully:", response.data);
    }
  } catch (error) {
    // Log the error details
    console.error("Error sending verification email:", error);
    console.error("Error message:", error.message);
    console.error("Stack trace:", error.stack);
    throw new Error("Error sending verification email: " + error.message);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to our company",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
    });
  } catch (error) {
    console.log("error sending welcome email", error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Reset Your Password",
      html: `Click <a href="${resetURL}">here</a> to reset your password`,
    });
  } catch (error) {
    console.log("error sending password reset email", error);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Password Reset Was Successful",
      html: `Your password was reset successfully`,
    });
  } catch (error) {
    console.log("error sending password reset successful email", error);
  }
}

// Add this function to resend the verification email
export const resendVerificationEmail = async (email, verificationToken) => {
  console.log("Resending verification email...");
  return await sendVerificationEmail(email, verificationToken);
};