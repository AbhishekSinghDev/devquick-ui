import React from "react";

import Image from "next/image";
import Logo from "@/public/logo/devquickui-icon.png";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="border-t mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="py-10 w-full">
        <Image
          src={Logo}
          height={100}
          width={100}
          className="mx-auto h-12 w-auto"
          alt="devquick/ui"
        />
        <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Link href="/" className="text-center">
            devquick/ui
          </Link>
          <Link
            className="flex items-center justify-center gap-2 text-center"
            href="https://github.com/AbhishekSinghDev/devquick-ui"
          >
            <FaGithub /> <span>github</span>
          </Link>
        </div>
        <p className="mt-1 text-center text-sm leading-6">
          © 2024 devquick/ui, All rights reserved.
        </p>

        <div className="mt-3 flex sm:flex-row flex-col items-center justify-center text-sm font-semibold leading-6">
          <p>Developed & Maintained by </p>

          <div className="flex sm:flex-row items-center justify-center">
            <Button asChild variant="link">
              <Link
                href="https://www.abhisheksingh.tech"
                className="underline underline-offset-4"
                target="_blank"
              >
                Abhishek Singh
              </Link>
            </Button>
            <div className="hidden sm:block">|</div>
            <Button asChild variant="link">
              <Link
                href="https://www.linkedin.com/in/himanshu-dutt-77k"
                className="underline underline-offset-4"
                target="_blank"
              >
                Himanshu Kumar Dutt
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
