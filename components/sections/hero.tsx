import React from "react";

import Link from "next/link";
import Announcement from "../shared/announcement";

import { IoIosRocket } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <main className="max-h-80 my-auto h-80 flex flex-col items-center justify-center space-y-4">
      <div>
        <Announcement message="Introducing devquick/ui" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center text-center gap-4">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter">
            Build your web faster
          </h1>
          <IoIosRocket className="h-10 w-10 hidden sm:block" />
        </div>
        <p className="max-w-screen-sm sm:max-w-lg mx-auto text-center text-base md:text-lg">
          Beautifully designed sections that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button size="sm">Get Started</Button>
        <Button asChild variant="secondary" size="sm">
          <Link
            href="https://github.com/AbhishekSinghDev/devquick-ui.git"
            className="flex items-center justify-center gap-2"
          >
            <IoLogoGithub className="h-5 w-5" />
            <p className="text-base">GitHub</p>
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default Hero;
