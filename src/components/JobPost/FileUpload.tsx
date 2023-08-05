import Image from "next/image";
import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface IFileUpload {
  onFileUpload: (file: File) => void;
}
export const FileUpload: FC<IFileUpload> = ({ onFileUpload }) => {
  const onDrop = useCallback(
    async (files: any) => {
      onFileUpload(files[0]);
    },
    [onFileUpload]
  );

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/*": [".pdf", ".doc", ".docx"],
    },
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="bg-white rounded-[8px] py-[26px] px-[24px] w-full">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="cursor-pointer flex flex-col items-center"
      >
        <input {...getInputProps()} />
        <Image
          src="/upload-cloud-icon.svg"
          width={40}
          height={40}
          alt="Upload cloud icon"
          className="rounded-full mb-[12px]"
        />
        {acceptedFiles && (
          <ul className="py-2 text-center font-sf-mono font-normal text-[16px] leading-[16px] text-black">
            {acceptedFileItems}
          </ul>
        )}
        <p className="font-rubik font-semibold text-[16px] leading-[20px] text-gradient">
          Click to upload your resume or drag and drop
        </p>
        <p className="font-sf-mono font-normal text-[14px] leading-[20px] text-[rgba(13,13,13,.6)]">
          .doc, .docx, .pdf(20MB Max)
        </p>
      </div>
    </div>
  );
};
