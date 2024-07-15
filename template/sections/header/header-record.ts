import ExploreRecordType from "@/types/header-record.type";

import HeaderOne from "./header-1.section";
import HeaderTwo from "./header-2.section";
import HeaderThree from "./header-3.section";
import HeaderFour from "./header-4.section";

const HeaderRecord: Array<ExploreRecordType> = [
  {
    id: "1",
    name: "Header 1 - using dropdown-menu",
    element: HeaderOne,
    installationCommands: [
      "npm i react-icons",
      "npx shadcn-ui@latest add dropdown-menu button",
    ],
    code: `import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IoMenu } from "react-icons/io5";

const HeaderOne = () => {
  const NavLinks = [
    { id: "1", content: "How it works", link: "#" },
    { id: "2", content: "Use Case", link: "#" },
    { id: "3", content: "Pricing", link: "#" },
    { id: "4", content: "Support", link: "#" },
  ];

  return (
    <header className="max-w-5xl mx-auto my-4">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a className="flex items-center justify-center gap-2" href="#">
              {/* Replace <Image /> next/image if using next.js for better image optimisation */}
              <img
                src="https://ucarecdn.com/35a8ccff-5cb1-4189-a341-9c5fa6bf51f4/devquickuiicon.png"
                alt="devquickui"
                height={50}
                width={50}
                className="h-7 w-auto"
              />
              <p className="font-semibold">devquick/ui</p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            {/* Replace <a></a> with <Link href=""></Link> if using next.js for better performance */}
            {NavLinks.map((item) => (
              <Button key={item.id} variant="link" size="sm" asChild>
                <a href={item.link}>{item.content}</a>
              </Button>
            ))}
          </div>

          <div className="flex items-center">
            <Button size="sm" variant="link" asChild>
              <a href="#" className="text-xs">
                Login
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="hidden md:flex"
              asChild
            >
              <a href="#" className="text-xs">
                Signup
              </a>
            </Button>

            {/* Mobile Navigation */}
            <div className="block md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <IoMenu />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Navigate To</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {NavLinks.map((item) => (
                      <DropdownMenuItem key={item.id}>
                        <a href={item.link}>{item.content}</a>
                      </DropdownMenuItem>
                    ))}

                    <DropdownMenuItem asChild>
                      <a
                        href="#"
                        className="w-full flex justify-center text-xs border"
                      >
                        Signup
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
`,
  },
  {
    id: "2",
    name: "Header 2 - using sheets",
    element: HeaderTwo,
    installationCommands: [
      "npm i react-icons",
      "npx shadcn-ui@latest add sheet button",
    ],
    code: `import React from "react";

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
import { Button } from "@/components/ui/button";

import { IoMenuSharp } from "react-icons/io5";

const HeaderTwo = () => {
  const navlinks = [
    { id: "1", title: "Pricing", path: "#" },
    { id: "2", title: "Blog", path: "#" },
    { id: "3", title: "Docs", path: "#" },
  ];

  return (
    <header className="max-w-7xl mx-auto my-4 px-2 sm:px-4">
      <nav className="flex justify-between">
        <div className="flex items-center gap-4">
          {/* Replace <Image /> next/image if using next.js for better image optimisation */}
          <img
            src="https://ucarecdn.com/35a8ccff-5cb1-4189-a341-9c5fa6bf51f4/devquickuiicon.png"
            alt="devquickui"
            className="h-7 w-auto"
          />
          <p className="block md:hidden font-medium">devquickui</p>

          <ul className="md:flex hidden gap-2">
            {navlinks.map((item) => (
              <li key={item.id}>
                <a href={item.path} className="text-sm font-medium">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:flex hidden items-center">
          <Button size="sm" variant="link">
            Sign in
          </Button>
          <Button size="sm" variant="secondary">
            Sign up for free
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline">
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
                    <p>devquickui</p>
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
                    <li key={item.id}>
                      <a href={item.path} className="text-sm font-medium">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="link" size="sm">
                      Sign in
                    </Button>
                    <Button variant="secondary" size="sm">
                      Sign up for free
                    </Button>
                  </div>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default HeaderTwo;
`,
  },
  {
    id: "3",
    name: "Header 3 - language switch",
    element: HeaderThree,
    installationCommands: [
      "npm i react-icons",
      "npx shadcn-ui@latest add dropdown-menu sheet",
    ],
    code: `"use client"; // optional, only for next.js

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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { IoMenuSharp } from "react-icons/io5";

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

const HeaderThree = () => {
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

        <div className="md:flex hidden items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button size="sm" variant="secondary" asChild>
                <div className="flex items-center gap-2">
                  {/* Replace img with <Image /> next/image if using next.js for better image optimisation */}
                  <img
                    src={selectedLang.path}
                    alt={selectedLang.title}
                    className="h-4 w-4"
                  />
                  <p>{selectedLang.title}</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Switch language</DropdownMenuLabel>
              {languageOptions.map((option) => (
                <DropdownMenuItem asChild key={option.title}>
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setSelectedLang(option)}
                  >
                    {/* Replace img with <Image /> next/image if using next.js for better image optimisation */}
                    <img
                      src={option.path}
                      alt={option.title}
                      className="h-4 w-4"
                    />
                    <p>{option.title}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline">
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
                  <div className="flex items-center justify-end gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button size="sm" variant="secondary" asChild>
                          <div className="flex items-center gap-2">
                            {/* Replace img with <Image /> next/image if using next.js for better image optimisation */}
                            <img
                              src={selectedLang.path}
                              alt={selectedLang.title}
                              className="h-4 w-4"
                            />
                            <p>{selectedLang.title}</p>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Switch language</DropdownMenuLabel>
                        {languageOptions.map((option) => (
                          <DropdownMenuItem asChild key={option.title}>
                            <div
                              className="flex items-center gap-2 cursor-pointer"
                              onClick={() => setSelectedLang(option)}
                            >
                              {/* Replace img with <Image /> next/image if using next.js for better image optimisation */}
                              <img
                                src={option.path}
                                alt={option.title}
                                className="h-4 w-4"
                              />
                              <p>{option.title}</p>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default HeaderThree;
`,
  },
  {
    id: "4",
    name: "Header 4 - user avatar",
    element: HeaderFour,
    installationCommands: [
      "npm i react-icons",
      "npx shadcn-ui@latest add avatar dropdown-menu sheet",
    ],
    code: `"use client"; // optional, only for next.js

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
`,
  },
];

export default HeaderRecord;
