import { TabsTagType } from "@/types/tags.type";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface TagsGalleryProps {
  TabTags: Array<TabsTagType>;
  renderingOn: "sections-tab" | "components-tab" | "clones-tab";
}

const TagsGallery: React.FC<TagsGalleryProps> = ({ TabTags, renderingOn }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
      {TabTags.map((item: TabsTagType) => (
        <div
          className="group cursor-pointer relative border-[0.1px] border-gray-500 rounded-lg drop-shadow-md"
          key={item.id}
        >
          <Image
            src={item.imageUrl}
            alt={item.tag}
            height={600}
            width={600}
            loading="lazy"
            className="aspect-video w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
          />
          <p className="font-medium w-full flex items-center justify-center my-2">
            {item.tag} {renderingOn === "sections-tab" && "Sections"}
            {renderingOn === "components-tab" && "Components"}
            {renderingOn === "clones-tab" && "Clones"}
          </p>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button asChild>
              <Link
                href={
                  renderingOn === "sections-tab"
                    ? `/section${item.link}`
                    : renderingOn === "components-tab"
                    ? `/component${item.link}`
                    : `/clone${item.link}`
                }
              >
                View
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagsGallery;
