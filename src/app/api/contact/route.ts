import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "VIGI AGENCY <contact@vigidevis.be>";
const TO_EMAIL = "mathis7390lol@gmail.com";

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquant");
    return NextResponse.json(
      { error: "Configuration email manquante. Ajoutez RESEND_API_KEY dans .env.local (et sur Vercel)." },
      { status: 500 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const { name, business, email, city, message } = body;

  if (!name || !business || !email || !city || !message) {
    return NextResponse.json(
      { error: "Tous les champs sont requis." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nouvelle demande — ${escapeHtml(name)} (${escapeHtml(city)})`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Activité :</strong> ${escapeHtml(business)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Ville :</strong> ${escapeHtml(city)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Réessayez plus tard." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
