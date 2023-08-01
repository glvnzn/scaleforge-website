"use client";

import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "About us", href: "/about-us", current: true, type: "link" },
  { name: "Careers", href: "/careers", current: false, type: "link" },
  { name: "Contact us", href: "/contact-us", current: false, type: "button" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathName = usePathname();

  const isActive = (navItemPath: string) => {
    return pathName === navItemPath;
  };

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1120px]">
            <div className="relative flex h-[56px] lg:h-[104px] items-center justify-between">
              <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <label className="block lg:hidden font-rubik font-semibold text-[20px] leading-[24px] pl-5">
                    Menu
                  </label>
                  <Link href="/">
                    <span className="sr-only">ScaleForge</span>
                    <Image
                      src="/sf-logo-white.svg"
                      width={286}
                      height={37}
                      className="hidden lg:block max-h-[37px]"
                      alt="ScaleForge Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:hidden lg:block">
                <div className="flex font-rubik gap-x-[40px] items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        isActive(item.href) && item.type === "link"
                          ? "border-b-rosso-red border-b-2"
                          : "hover:border-b-rosso-red hover:border-b-2",
                        item.type === "button"
                          ? "font-semibold text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black"
                          : "font-semibold text-[20px] leading-[24px] pb-1"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
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
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[rgba(255,255,255,.2)] text-white border-l-rosso-red border-l-4"
                      : " hover:bg-[rgba(255,255,255,.2)] hover:text-white hover:border-l-rosso-red hover:border-l-4",
                    "block pl-4 min-h-[56px] font-medium py-[16px]"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
