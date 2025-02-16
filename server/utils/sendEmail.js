require("dotenv").config();
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email using Resend.
 * @param {Object} options - Email sending options.
 * @param {string} options.email - Recipient's email.
 * @param {string} options.subject - Email subject.
 * @param {string} options.message - Email body.
 */
const sendEmail = async ({ email, subject, message }) => {
  try {
    const response = await resend.emails.send({
      from: "LocalVibe <noreply@localvibe.com>",
      to: email,
      subject,
      html: `<p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    if (response.error) {
      console.error("Email sending failed:", response.error);
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully:", response.id);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};

module.exports = sendEmail;
