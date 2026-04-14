import { Router } from "express";
import { getResendClient } from "../lib/resend";
import { logger } from "../lib/logger";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { name, email, organization, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  try {
    const client = getResendClient();

    await client.emails.send({
      from: "onboarding@resend.dev",
      to: "kevin.grapes@xuninc.com",
      replyTo: email,
      subject: `New Inquiry from ${name}${organization ? ` — ${organization}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #141210;">
          <h2 style="font-size: 22px; font-weight: normal; margin-bottom: 24px; border-bottom: 1px solid #E2DED8; padding-bottom: 16px;">
            New inquiry via Xnergy United Networks
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #7A7570; width: 140px;">Name</td>
              <td style="padding: 10px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #7A7570;">Email</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #8B6F3E;">${email}</a></td>
            </tr>
            ${organization ? `
            <tr>
              <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #7A7570;">Organization</td>
              <td style="padding: 10px 0; font-size: 14px;">${organization}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 10px 0; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #7A7570; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 14px; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
          <p style="margin-top: 32px; font-size: 11px; color: #7A7570; border-top: 1px solid #E2DED8; padding-top: 16px;">
            Submitted via xnergy.replit.app
          </p>
        </div>
      `,
    });

    logger.info({ name, email }, "Contact form submission sent");
    return res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default contactRouter;
