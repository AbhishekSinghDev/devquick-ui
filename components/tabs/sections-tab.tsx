import React from "react";

import { Button } from "../ui/button";

import SectionTags from "@/constants/sections-tags";
import { SectionTagsType } from "@/types/section-tag";
import Image from "next/image";
import Link from "next/link";

const SectionsTab = () => {
  return (
    <main className="w-full h-full flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
        {SectionTags.map((item: SectionTagsType) => (
          <div
            className="group cursor-pointer relative border-[0.1px] border-gray-500 rounded-lg drop-shadow-md"
            key={item.id}
          >
            <Image
              src={item.imageUrl}
              alt={item.tag}
              height={500}
              width={500}
              className="aspect-video w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <p className="font-medium w-full flex items-center justify-center my-2">
              {item.tag} Sections
            </p>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Button asChild>
                <Link href={`/section${item.link}`}>View</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default SectionsTab;
