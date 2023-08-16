import { NextResponse } from "next/server";
import { Resend } from "resend";
import ApplyFormEmail from "@/components/JobPost/ApplyFormEmail";
import { z } from "zod";
import { applyFormSchema } from "@/components/JobPost/ApplyFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // get the form data
    const data = await req.formData();

    // map through all the entries
    const formData: Record<string, string | File | Buffer> = {};

    await Promise.all(
      Array.from(data.entries()).map(async ([key, value]) => {
        const isFile = typeof value == "object";

        if (isFile) {
          const blob = value as Blob;
          const filename = blob.name;

          const buffer = Buffer.from(await blob.arrayBuffer());
          formData[key] = buffer;
          formData["fileName"] = filename;
        } else {
          formData[key] = value;
        }
      })
    );

    // Validate the form data against the schema
    applyFormSchema.parse(formData);

    const emailData = {
      from: "onboarding@resend.dev",
      to: "hiring@scaleforge.tech",
      subject: "ScaleForge - Job Application",
      react: <ApplyFormEmail emailData={formData} />,
      attachments: [
        {
          filename: formData.fileName as string,
          content: formData.resume as string,
        },
      ],
    };

    const result = await resend.emails.send(emailData);

    return NextResponse.json(result);
  } catch (error: z.ZodError | any) {
    return NextResponse.json(
      { error: error instanceof z.ZodError ? error.errors : error.message },
      { status: error.statusCode || 400 }
    );
  }
}
