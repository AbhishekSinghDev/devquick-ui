import React from "react";

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
      <div className="px-2 sm:px-4">
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
