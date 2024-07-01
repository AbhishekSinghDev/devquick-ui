import React from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo/devquickui-icon.png";
import { headerNavigation } from "@/constants/header-navigation.constant";
import { HeaderNavType } from "@/types/header.type";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

import { FaGithub } from "react-icons/fa";
import ToggleTheme from "./toggle-theme";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const DesktopNavigation = () => {
  return (
    <main className="max-w-screen-2xl mx-auto flex items-center justify-between h-14">
      <div className="flex items-center gap-4">
        <Link className="flex items-center cursor-pointer gap-2" href="/">
          <Image
            src={Logo}
            height={100}
            width={100}
            alt="devquickui"
            className="h-7 w-7 aspect-square"
          />
          <h1 className="font-bold text-sm lg:text-base">devquick/ui</h1>
        </Link>

        <ul className="flex items-center gap-4">
          {headerNavigation.map((nav: HeaderNavType, index: number) => (
            <li key={index}>
              <Link
                href={nav.link}
                className="text-gray-400 font-semibold text-xs lg:text-sm"
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={cn(
            "flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-12 items-center justify-between cursor-pointer"
          )}
        >
          <p className="text-gray-400 text-xs">Search documentation...</p>
          <Badge variant="secondary" className="text-xs px-1 rounded-md">
            ⌘ K
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link href="https://github.com/AbhishekSinghDev/devquick-ui.git">
              <FaGithub className="h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
          </Button>
          <ToggleTheme />
        </div>
      </div>
    </main>
  );
};

export default DesktopNavigation;
