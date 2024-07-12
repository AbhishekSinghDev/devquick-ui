import React from "react";

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
          <p className="block md:hidden font-medium">devquick/ui</p>

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
