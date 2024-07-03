import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { LuComponent } from "react-icons/lu";
import { Button } from "../ui/button";

interface AnnouncementProps {
  message: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ message }) => {
  return (
    <Button
      className="flex items-center px-3 py-1 gap-3 text-sm cursor-pointer rounded-full"
      size="sm"
      variant="secondary"
    >
      <div>
        <LuComponent className="h-3 w-3" />
      </div>

      <div>|</div>

      <div className="flex items-center gap-3 text-xs sm:text-sm">
        <h1>{message ? message : "Announcements and updates"}</h1>
        <FaArrowRightLong className="h-3 w-3" />
      </div>
    </Button>
  );
};

export default Announcement;
