import React from "react";
import DesktopNavigation from "./desktop-navigation";
import MobileNavigation from "./mobile-navigation";

const Header = () => {
  return (
    <nav className="w-full border-b dark:border-gray-900 border-gray-100 sticky top-0 left-0 backdrop-blur-md z-50">
      <main className="max-w-screen-2xl mx-auto hidden md:block px-4">
        <DesktopNavigation />
      </main>
      <main className="block md:hidden px-4 dark:bg-inherit bg-gray-50">
        <MobileNavigation />
      </main>
    </nav>
  );
};

export default Header;
