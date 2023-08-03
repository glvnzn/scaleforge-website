import { contactFormSchema } from "@/components/ContactUs/ContactFormSchema";
import ContactUsEmail from "@/components/ContactUsEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const dataObject = await request
    .json()
    .then((body) => contactFormSchema.parse(body));

  const data = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: dataObject.email,
    subject: "ScaleForge - Contact Form Data",
    react: <ContactUsEmail emailData={dataObject} />,
  });

  return NextResponse.json(data);
}
