"use client"; // optional, only for next.js

import React, { useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  FaCloud,
  FaCreditCard,
  FaGithub,
  FaPlus,
  FaPlusCircle,
  FaUser,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { LuLifeBuoy, LuUserSquare } from "react-icons/lu";
import { IoLogOut, IoMail, IoMenuSharp, IoSettings } from "react-icons/io5";

const navlinks = [
  { id: "1", title: "Home", path: "#" },
  { id: "2", title: "About", path: "#" },
  { id: "3", title: "Services", path: "#" },
  { id: "4", title: "Pricing", path: "#" },
  { id: "5", title: "Contact", path: "#" },
];

const languageOptions = [
  { title: "Hindi (IND)", path: "/template-assets/flag/india.svg" },
  { title: "English (US)", path: "/template-assets/flag/us.svg" },
  { title: "中国人 (CHN)", path: "/template-assets/flag/china.svg" },
  { title: "Italiana (IT)", path: "/template-assets/flag/itlay.svg" },
  //   feel free to add more languages options your website support
];

const HeaderFour = () => {
  const [selectedLang, setSelectedLang] = useState({
    title: languageOptions[0].title,
    path: languageOptions[0].path,
  });

  return (
    <header className="max-w-7xl mx-auto my-4 px-2 sm:px-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Replace img with <Image /> next/image if using next.js for better image optimisation */}
          <img
            src="https://ucarecdn.com/35a8ccff-5cb1-4189-a341-9c5fa6bf51f4/devquickuiicon.png"
            alt="devquickui"
            className="h-7 w-auto"
          />
          <p className="font-medium">devquick/ui</p>
        </div>

        <ul className="md:flex hidden gap-2">
          {navlinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="text-sm font-medium transform duration-200 transition-all hover:scale-50"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" sizes="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <FaUser className="pr-2 h-5 w-5" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FaCreditCard className="pr-2 h-5 w-5" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IoSettings className="pr-2 h-5 w-5" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LuUserSquare className="pr-2 h-5 w-5" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <FaPlus className="pr-2 h-5 w-5" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <IoMail className="pr-2 h-5 w-5" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FaMessage className="pr-2 h-5 w-5" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FaPlusCircle className="pr-2 h-5 w-5" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <FaGithub className="pr-2 h-5 w-5" />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LuLifeBuoy className="pr-2 h-5 w-5" />
                  <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <FaCloud className="pr-2 h-5 w-5" />
                  <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <IoLogOut className="pr-2 h-5 w-5" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" variant="secondary">
                  <IoMenuSharp className="cursor-pointer" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ucarecdn.com/35a8ccff-5cb1-4189-a341-9c5fa6bf51f4/devquickuiicon.png"
                        alt="devquickui"
                        className="h-7 w-auto"
                      />
                      <p>devquick/ui</p>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    Feel free to customize according to you. Just don&apos;t
                    forget to give a star on Github.
                  </SheetDescription>
                </SheetHeader>
                <div className="my-4">
                  <ul className="flex flex-col gap-2">
                    {navlinks.map((item) => (
                      <li key={item.title}>
                        <a href={item.path} className="text-sm font-medium">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="secondary" size="sm">
                      Close
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderFour;
