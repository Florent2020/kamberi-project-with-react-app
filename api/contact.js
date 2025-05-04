import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST requests allowed");
  }

  const { name, address, phone, company, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Message",
      text: `
Name: ${name}
Address: ${address}
Phone: ${phone}
Company: ${company}
Message: ${message}
      `,
    });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
