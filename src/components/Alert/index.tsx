import React from "react";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import XIcon from "./XIcon";
import CheckIcon from "./CheckIcon";
import AlertIcon from "./AlertIcon";
import cn from "classnames";

const Alert = () => {
  return (
    <Toaster>
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            padding: "16px",
            borderRadius: "8px",
            border: cn(
              "1px solid",
              { "#A3F0A7": t.type === "success" },
              { "#FCD2CF": t.type === "error" }
            ),
            background: cn(
              { "#E8FCE9": t.type === "success" },
              { "#FCEAE8": t.type === "error" }
            ),
            minHeight: "52px",
            minWidth: "1216px",
          }}
        >
          {({ icon, message }) => (
            <div className="font-sf-mono w-full h-full">
              <div className="flex flex-row items-center">
                <div className="flex-none">
                  {t.type === "success" && (
                    <CheckIcon size={24} color={"#139E19"} />
                  )}
                  {t.type === "error" && (
                    <AlertIcon size={24} color={"#800C05"} />
                  )}
                </div>
                <div
                  className={cn(
                    "flex-1 font-normal text-[14px] leading-[20px] justify-start grid",
                    { "text-[#008005]": t.type === "success" },
                    { "text-[#800C05]": t.type === "error" }
                  )}
                >
                  {message}
                </div>
                <div className="flex-none">
                  {t.type !== "loading" && (
                    <button onClick={() => toast.dismiss(t.id)}>
                      <XIcon
                        size={14}
                        color={cn(
                          { "#00C408": t.type === "success" },
                          { "#F04438": t.type === "error" }
                        )}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Alert;
