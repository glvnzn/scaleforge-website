import { contactFormSchema } from "@/components/ContactUs/ContactFormSchema";
import ContactUsEmail from "@/components/ContactUsEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const dataObject = await request.json().then((body) => {
      return contactFormSchema.parse(body);
    });

    try {
      const data = await resend.emails.send({
        from: "no-reply@updates.scaleforge.site",
        to: "glevinzon.zeal@gmail.com",
        subject: "ScaleForge - Contact Form",
        react: <ContactUsEmail emailData={dataObject} />,
      });

      return NextResponse.json(data);
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
