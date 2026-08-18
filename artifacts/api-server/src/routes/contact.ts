import { Router } from "express";
import { getMailTransport } from "../lib/resend";
import { logger } from "../lib/logger";

const contactRouter = Router();

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

contactRouter.post("/", async (req, res) => {
  const { name, email, organization, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  try {
    const transport = getMailTransport();
    const fromUser = process.env.SMTP_USER!;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeOrganization = escapeHtml(organization);
    const safeMessage = escapeHtml(message);
    const subjectName = String(name).replace(/[\r\n]+/g, " ");
    const subjectOrganization = String(organization ?? "").replace(/[\r\n]+/g, " ");

    await transport.sendMail({
      from: `"Xnergy United Networks" <${fromUser}>`,
      to: "kevin.grapes@xuninc.com",
      replyTo: String(email),
      subject: `New Inquiry from ${subjectName}${subjectOrganization ? ` — ${subjectOrganization}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #141210;">
          <h2 style="color: #8B6F3E; border-bottom: 1px solid #e0d6c8; padding-bottom: 12px;">
            New Inquiry — Xnergy United Networks
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            ${organization ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Organization</td>
              <td style="padding: 8px 0;">${safeOrganization}</td>
            </tr>` : ""}
          </table>
          ${message ? `
          <div style="background: #F9F7F4; border-left: 3px solid #8B6F3E; padding: 16px; margin-top: 8px;">
            <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>` : ""}
        </div>
      `,
    });

    logger.info(`Contact form submitted by ${name} <${email}>`);
    return res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

export default contactRouter;
