import React from "react";

import ExploreRecordType from "@/types/header-record.type";
import PreviewCodeView from "./preview-code-view";

interface ExploreGalleryProps {
  ExploreRecord: Array<ExploreRecordType>;
}

const ExploreGallery: React.FC<ExploreGalleryProps> = ({ ExploreRecord }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full">
      {ExploreRecord.map((item: ExploreRecordType) => (
        <div
          className="group cursor-pointer relative py-4 px-4 space-y-4"
          key={item.id}
        >
          <div className="flex justify-between items-center">
            <div className="font-semibold">{item.name}</div>
            <div className="">
              <PreviewCodeView
                preview={<item.element />}
                code={item.code}
                installationCommands={item.installationCommands}
              />
            </div>
          </div>
          <div className="w-full border-[0.225px] border-gray-500 rounded-lg drop-shadow-md px-2 sm:px-4">
            <item.element />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreGallery;
