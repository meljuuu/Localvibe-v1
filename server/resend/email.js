import nodemailer from "nodemailer";
require("dotenv").config();
import {
  verificationTokenEmailTemplate,
  WELCOME_EMAIL_TEMPLATE,
} from "./email-templates.js";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com", // SMTP host
  port: 587, // 465 secure connection, 587 TLS
  secure: false, // true if 465
  auth: {
    user: process.env.SENDER_EMAIL, // SMTP user
    pass: process.env.SENDER_PASSWORD, // SMTP password
  },
});

export const sendVerificationEmail = async (email, verificationToken) => {
  console.log("Email:", email);
  console.log("Verification Token:", verificationToken);

  try {
    const info = await transporter.sendMail({
      from: {
        name: 'LocalVibe Team', // sender name
        address: process.env.SENDER_EMAIL, // sender email
      }, 
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

export const sendWelcomeEmail = async (email, name) => {
  console.log("Email:", email);
  console.log("Recipient Name:", name);

  try {

    const info = await transporter.sendMail({
      from: {
        name: 'LocalVibe Team',
        address: process.env.SENDER_EMAIL,
      },
      to: email,
      subject: "Welcome to Our Company",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
    });

    console.log("Welcome email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Error sending welcome email: " + error.message);
  }
};


export const sendPasswordResetEmail = async (email, resetURL) => {
  console.log("Email:", email);
  console.log("Reset URL:", resetURL);

  try {
    const info = await transporter.sendMail({
      from: {
        name: "LocalVibe Team", // sender name
        address: process.env.SENDER_EMAIL, // sender email
      },
      to: email,
      subject: "Reset Your Password",
      html: `Click <a href="${resetURL}">here</a> to reset your password`,
    });

    console.log("Password reset email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Error sending password reset email: " + error.message);
  }
};

export const sendResetSuccessEmail = async (email) => {
  console.log("Email:", email);

  try {
    const info = await transporter.sendMail({
      from: {
        name: "LocalVibe Team", // sender name
        address: process.env.SENDER_EMAIL, // sender email
      },
      to: email,
      subject: "Password Reset Was Successful",
      html: `Your password was reset successfully`,
    });

    console.log("Password reset success email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error("Error sending password reset success email: " + error.message);
  }
};
