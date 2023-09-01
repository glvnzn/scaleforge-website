"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { contactFormSchema } from "./ContactFormSchema";
import { toast } from "react-hot-toast";
import Alert from "@/components/Alert";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization: string;
  message: string;
}

const ContactForm = (props: { recaptchaSiteKey: string }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<IFormData>({
    resolver: zodResolver(contactFormSchema),
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isRecaptchaOkay, setIsRecaptchaOkay] = useState(false);

  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      organization: "",
      message: "",
    });
  }, [isSubmitSuccess, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const result = await fetch("/api/contact-us", {
      method: "POST",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        organization: data.organization,
        message: data.message,
      }),
    });

    const resData = await result.json();

    if (result.ok) {
      setIsSubmitSuccess(true);
      toast.success("Submission successful! Thank you.");
    } else {
      toast.error(resData.error);
    }
  });

  function onChange(value: any) {
    if (value) setIsRecaptchaOkay(true);
  }

  function onExpired() {
    setIsRecaptchaOkay(false);
  }

  return (
    <div className="w-[604px] mx-auto">
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
        <div className="flex flex-row gap-[24px] items-center">
          <input
            type="checkbox"
            value="yes"
            required
            className="opacity-0 absolute h-6 w-6"
          />
          <div className="bg-white border-2 rounded-md border-rosso-red w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-rosso-red">
            <svg
              className="fill-current hidden w-3 h-3 text-rosso-red pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#D70D01"
                  fill-rule="nonzero"
                >
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label className="select-none">
            <span className="font-sf-mono font-normal text-[16px] leading-[20px] text-white opacity-80">
              By submitting this form, you agree to&nbsp;
              <u>ScaleForge’s Privacy Policy</u>&nbsp;and&nbsp;
              <u>Terms & Conditions</u>.
            </span>
          </label>
        </div>
        <div className="p-2">
          <div className="flex items-center mr-4 mb-2"></div>
        </div>
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={props.recaptchaSiteKey}
            onChange={onChange}
            onExpired={onExpired}
          />
        </div>
        <div className="flex justify-center">
          <button
            disabled={isSubmitting || !isRecaptchaOkay}
            type="submit"
            className="mt-[40px] font-rubik font-semibold	text-[20px] leading-[24px] rounded py-[12px] px-[20px] disabled:opacity-50 disabled:pointer-events-none  bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <Alert />
    </div>
  );
};

export default ContactForm;
