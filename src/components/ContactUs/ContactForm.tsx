"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(3, "First Name must be at least 3 characters")
    .max(50),
  lastName: z
    .string()
    .min(3, "Last Name must be at least 3 characters")
    .max(50),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string(),
  organization: z.string(),
  message: z.string(),
});

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization: string;
  message: string;
}

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="max-w-[604px] mx-auto">
      <form
        className="flex flex-col justify-center items-left gap-y-[20px]"
        onSubmit={onSubmit}
      >
        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
            <label htmlFor="name">First Name</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  placeholder="First name"
                  {...field}
                  type="text"
                  className="text-black rounded-[8px] py-[10px] px-[14px]"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-1 flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
            <label htmlFor="name">Last Name</label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  placeholder="Last name"
                  {...field}
                  type="text"
                  className="text-black rounded-[8px] py-[10px] px-[14px]"
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
          <label htmlFor="name">Email Address</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                placeholder="Email address"
                {...field}
                type="text"
                className="text-black rounded-[8px] py-[10px] px-[14px]"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
          <label htmlFor="name">Phone number</label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <input
                placeholder="Phone number"
                {...field}
                type="text"
                className="text-black rounded-[8px] py-[10px] px-[14px]"
              />
            )}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="flex flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
          <label htmlFor="name">Organization</label>
          <Controller
            name="organization"
            control={control}
            render={({ field }) => (
              <input
                placeholder="Organization"
                {...field}
                type="text"
                className="text-black rounded-[8px] py-[10px] px-[14px]"
              />
            )}
          />
          {errors.organization && (
            <p className="text-red-500">{errors.organization.message}</p>
          )}
        </div>

        <div className="flex flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
          <label htmlFor="name">Message</label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <textarea
                placeholder="Message"
                {...field}
                rows={5}
                className="text-black rounded-[8px] py-[10px] px-[14px]"
              />
            )}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div className="flex flex-row gap-[24px]">
          <input type="checkbox" required />
          <span className="font-sf-mono font-normal text-[16px] leading-[20px] text-white opacity-80">
            By submitting this form, you agree to&nbsp;
            <u>ScaleForge’s Privacy Policy</u>&nbsp;and&nbsp;
            <u>Terms & Conditions</u>.
          </span>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-[40px] font-rubik font-semibold	text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
