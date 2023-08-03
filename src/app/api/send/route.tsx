import { contactFormSchema } from "@/components/ContactUs/ContactFormSchema";
import ContactUsEmail from "@/components/ContactUsEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const dataObject = await request
    .json()
    .then((body) => contactFormSchema.safeParse(body))
    .catch((error) => {
      console.log(error);
      return error;
    });

  if (!dataObject.success) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } else {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: dataObject.data.email,
      subject: "ScaleForge - Contact Form Data",
      react: <ContactUsEmail emailData={dataObject.data} />,
    });

    return NextResponse.json(data);
  }
}
