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
