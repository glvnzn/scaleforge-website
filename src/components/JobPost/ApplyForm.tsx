"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, useForm } from "react-hook-form";
import { applyFormSchema } from "./ApplyFormSchema";
import { FileUpload } from "./FileUpload";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization: string;
  coverLetter: string;
  resume: File | undefined;
}

const ApplyForm = (props: { jobTitle?: string }) => {
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<IFormData>({
    resolver: zodResolver(applyFormSchema),
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
      coverLetter: "",
      resume: undefined,
    });
  }, [isSubmitSuccess, reset]);

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("organization", data.organization);
    formData.append("coverLetter", data.coverLetter);
    formData.append("jobTitle", `${props.jobTitle}`);

    if (data.resume) {
      formData.append("resume", data.resume);
    }

    const result = await fetch("/api/careers", {
      method: "POST",
      body: formData,
    });

    if (result.status === 200) {
      setIsSubmitSuccess(true);
    }
  });

  function onChange(value: any) {
    if (value) setIsRecaptchaOkay(true);
  }

  function onExpired() {
    setIsRecaptchaOkay(false);
  }

  return (
    <section className="flex flex-col items-center mt-[80px]">
      <div className="w-[604px] mx-auto">
        <form
          className="flex flex-col justify-center items-left gap-y-[20px]"
          onSubmit={onSubmit}
        >
          <div className="flex gap-[32px]">
            <div className="flex flex-1 flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px]">
              <label htmlFor="firstName">First Name</label>
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
              <label htmlFor="lastName">Last Name</label>
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
            <label htmlFor="email">Email Address</label>
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
            <label htmlFor="phoneNumber">Contact number</label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <input
                  placeholder="Contact number"
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
            <label htmlFor="organization">Organization</label>
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
            <label htmlFor="coverLetter">Cover Letter</label>
            <Controller
              name="coverLetter"
              control={control}
              render={({ field }) => (
                <textarea
                  placeholder="Cover Letter"
                  {...field}
                  rows={5}
                  className="text-black rounded-[8px] py-[10px] px-[14px]"
                />
              )}
            />
            {errors.coverLetter && (
              <p className="text-red-500">{errors.coverLetter.message}</p>
            )}
          </div>

          <div className="flex flex-col font-sf-mono font-normal text-[16px] leading-[24px] gap-y-[8px] mb-[80px]">
            <label htmlFor="resume">Resume</label>
            <FileUpload
              onFileUpload={(file) => {
                setValue("resume", file);
              }}
            />
            {errors.resume && (
              <p className="text-red-500">{errors.resume.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6Le12HonAAAAAJLnF6gpmeutjKTD_eCHmWgfYFUJ"
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
      </div>
    </section>
  );
};

export default ApplyForm;
