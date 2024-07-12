import ExploreRecordType from "@/types/header-record.type";

import HeaderOne from "./header-1.section";
import HeaderTwo from "./header-2.section";

const HeaderRecord: Array<ExploreRecordType> = [
  {
    id: "1",
    name: "Header 1",
    imageUrl:
      "https://ucarecdn.com/8d44c4fa-0135-44a4-842f-b215ef202b97/header1section.jpg",
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
    name: "Header 2",
    imageUrl:
      "https://ucarecdn.com/5fd7c5f8-3c7d-4389-8ec5-fbacff11c980/header2section.png",
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
];

export default HeaderRecord;
