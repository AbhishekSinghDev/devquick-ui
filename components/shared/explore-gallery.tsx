import React from "react";

import Image from "next/image";

import ExploreRecordType from "@/types/header-record.type";
import PreviewCodeView from "./preview-code-view";

interface ExploreGalleryProps {
  ExploreRecord: Array<ExploreRecordType>;
}

const ExploreGallery: React.FC<ExploreGalleryProps> = ({ ExploreRecord }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {ExploreRecord.map((item: ExploreRecordType) => (
        <div
          className="group cursor-pointer relative border-[0.1px] border-gray-500 rounded-lg drop-shadow-md"
          key={item.id}
        >
          <Image
            src={item.imageUrl}
            alt={item.name}
            height={600}
            width={600}
            loading="lazy"
            className="aspect-video w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <p className="font-medium w-full flex items-center justify-center my-2">
            {item.name}
          </p>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PreviewCodeView
              preview={<item.element />}
              code={item.code}
              installationCommands={item.installationCommands}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreGallery;
