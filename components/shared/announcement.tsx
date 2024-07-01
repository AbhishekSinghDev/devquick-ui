import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { LuComponent } from "react-icons/lu";

interface AnnouncementProps {
  message: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ message }) => {
  return (
    <div className="flex items-center rounded-xl px-3 py-1 gap-3 text-sm cursor-pointer dark:bg-gray-900 bg-gray-100">
      <div className="border-r pr-3">
        <LuComponent className="h-4 w-4" />
      </div>

      <div className="flex items-center gap-3">
        <h1>{message ? message : "Announcements and updates"}</h1>
        <FaArrowRightLong className="h-3 w-3" />
      </div>
    </div>
  );
};

export default Announcement;
