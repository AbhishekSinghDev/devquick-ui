import React from "react";
import TagsGallery from "../shared/tags-gallery";
import SectionTags from "@/constants/sections-tags";

const SectionsTab = () => {
  return (
    <main className="w-full h-full flex">
      <TagsGallery TabTags={SectionTags} renderingOn="sections-tab" />
    </main>
  );
};

export default SectionsTab;
