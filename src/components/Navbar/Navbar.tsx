"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tinaField, useTina } from "tinacms/dist/react";
import { GlobalQuery } from "../../../tina/__generated__/types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = (props: {
  data: GlobalQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const pathName = usePathname();

  const isActive = (navItemPath: string) => {
    return pathName === navItemPath;
  };

  const { data } = useTina(props);

  return (
    <Disclosure
      as="nav"
      className="bg-black border-b-[1px] border-b-[#ffffff33]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full lg:max-w-[1120px] lg:px-4">
            <div className="relative flex h-[56px] lg:h-[104px] items-center justify-between">
              <div
                className="flex flex-row"
                data-tina-field={
                  data.global.header && tinaField(data.global.header, "imgSrc")
                }
              >
                <label className="block lg:hidden font-rubik font-semibold text-[20px] leading-[24px] pl-5">
                  Menu
                </label>
                <Link href="/">
                  <span className="sr-only">{data.global.header?.name}</span>
                  <Image
                    src={`${data.global.header?.imgSrc}`}
                    width={286}
                    height={37}
                    className="hidden lg:block max-h-[37px] object-contain object-left"
                    alt="ScaleForge Logo"
                  />
                </Link>
              </div>
              <div className="hidden md:hidden lg:block">
                <div className="flex font-rubik gap-x-[40px] items-center">
                  {data.global.header?.nav?.map((item) => {
                    if (item) {
                      return (
                        <Link
                          key={item.label}
                          href={`${item.href}`}
                          className={classNames(
                            isActive(`${item.href}`) && item.type === "Simple"
                              ? "border-b-rosso-red border-b-2"
                              : "hover:border-b-rosso-red hover:border-b-2",
                            item.type === "Button"
                              ? "font-semibold text-[20px] leading-[24px] rounded py-[12px] px-[20px] bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
                              : "font-semibold text-[20px] leading-[24px] pb-1"
                          )}
                          data-tina-field={tinaField(item)}
                        >
                          {item.label}
                        </Link>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Image
                      src="/x-icon.svg"
                      width={20}
                      height={20}
                      alt="Close icon"
                      className="block h-[20px] w-[20px]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      src="/burger-icon.svg"
                      width={20}
                      height={20}
                      alt="Close icon"
                      className="block h-[20px] w-[20px]"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block lg:hidden">
            <div className="font-rubik font-semibold text-[20px] leading-[24px] text-white">
              {data.global.header?.nav?.map((item) => {
                if (item) {
                  return (
                    <Disclosure.Button
                      key={item.label}
                      as="a"
                      href={`${item.href}`}
                      className={classNames(
                        "block pl-4 min-h-[56px] font-medium py-[16px]",
                        isActive(`${item.href}`) && item.type === "Simple"
                          ? "bg-[rgba(255,255,255,.2)] text-white border-l-rosso-red border-l-4"
                          : "hover:bg-[rgba(255,255,255,.2)] hover:text-white hover:border-l-rosso-red hover:border-l-4",
                        item.type === "Button"
                          ? "text-center !py-[10px] !min-h-[44px] !max-h-[44px] m-4 rounded bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
                          : ""
                      )}
                    >
                      {item.label}
                    </Disclosure.Button>
                  );
                }
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
