import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, brandName, lookingFor, brandDetails, email, phone } = req.body;

    const { data, error } = await resend.emails.send({
      // Resend provides a testing domain (onboarding@resend.dev). 
      // If you have a verified domain, change this to something like 'hello@yourdomain.com'
      from: "Slay the Strategy Contact <onboarding@resend.dev>",
      // Replace this with the actual email address you want to receive these forms at
      to: ["ppybharath19@gmail.com"], 
      subject: `New Contact Form Submission from ${name} (${brandName})`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Brand/Company Name:</strong> ${brandName || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>What are you looking for:</strong> ${lookingFor || "N/A"}</p>
        <p><strong>Brand Details/Message:</strong></p>
        <p>${brandDetails ? brandDetails.replace(/\n/g, "<br>") : "N/A"}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
