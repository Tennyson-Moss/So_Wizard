import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string, username: string) {
  return resend.emails.send({
    from: 'So Wizard <your_verified_email@yourdomain.com>', // this must be verified in your Resend dashboard
    to,
    subject: 'Welcome to So Wizard!',
    html: `
      <h2>Welcome, ${username}!</h2>
      <p>We’re thrilled to have you on board. Get ready for exclusive movie parties, newsletters, and film recommendations!</p>
      <p style="color: #e91e63; font-weight: bold;">Stay tuned—something magical is coming.</p>
      <p>— The So Wizard Team</p>
    `,
  });
}
