import nodemailer from "nodemailer";
import {
  verificationTokenEmailTemplate,
  WELCOME_EMAIL_TEMPLATE,
} from "./email-templates.js";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email", // SMTP host
  port: 587, // 465 secure connection, 587 TLS
  secure: false, // true if 465
  auth: {
    user: "solomonjoshua14040@gmail.com", // SMTP user
    pass: "-", // SMTP password
  },
});

export const sendVerificationEmail = async (email, verificationToken) => {
  console.log("Preparing to send verification email...");
  console.log("Email:", email);
  console.log("Verification Token:", verificationToken);

  try {
    const info = await transporter.sendMail({
      from: 'LocalVibe <solomonjoshua14040@gmail.com>', // sender email
      to: email,
      subject: "Verify Your Email Address Now",
      html: verificationTokenEmailTemplate.replace("{verificationToken}", verificationToken),
    });

    console.log("Email sent successfully: ", info.messageId);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Error sending verification email: " + error.message);
  }
};

// export const sendWelcomeEmail = async (email, name) => {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: [email],
//       subject: "Welcome to our company",
//       html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
//     });
//   } catch (error) {
//     console.log("error sending welcome email", error);
//   }
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: [email],
//       subject: "Reset Your Password",
//       html: `Click <a href="${resetURL}">here</a> to reset your password`,
//     });
//   } catch (error) {
//     console.log("error sending password reset email", error);
//   }
// };

// export const sendResetSuccessEmail = async (email) => {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: [email],
//       subject: "Password Reset Was Successful",
//       html: `Your password was reset successfully`,
//     });
//   } catch (error) {
//     console.log("error sending password reset successful email", error);
//   }
// }