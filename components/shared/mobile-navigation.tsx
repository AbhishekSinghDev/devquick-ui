import React from "react";

import Link from "next/link";
import Image from "next/image";

import ToggleTheme from "./toggle-theme";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { headerNavigation } from "@/constants/header-navigation.constant";
import { HeaderNavType } from "@/types/header.type";
import Logo from "@/public/logo/devquickui-icon.png";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const MobileNavigation = () => {
  return (
    <main className="w-full flex items-center justify-between h-14">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <FaBarsStaggered className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle asChild>
              <div className="flex items-center gap-3">
                <Image
                  src={Logo}
                  alt="devquick/ui"
                  height={100}
                  width={100}
                  className="h-5 w-5"
                />
                <h1 className="font-bold">devquick/ui</h1>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="pl-8">
            <ul className="py-2">
              {headerNavigation.map((nav: HeaderNavType, index) => (
                <li key={index} className="py-2">
                  <Link href={nav.link}>
                    {nav.text === "Docs" ? "Documentation" : nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>

      <div
        className={cn(
          "flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 gap-12 items-center justify-between cursor-pointer"
        )}
      >
        <p className="text-gray-400 text-xs whitespace-nowrap">
          Search documentation...
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="https://github.com/AbhishekSinghDev/devquick-ui.git">
            <FaGithub className="h-4 w-4 lg:h-5 lg:w-5" />
          </Link>
        </Button>
        <ToggleTheme />
      </div>
    </main>
  );
};

export default MobileNavigation;
