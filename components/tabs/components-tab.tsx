import React from "react";

import TagsGallery from "../shared/tags-gallery";
import ComponentsTag from "@/constants/components-tags";

const ComponentsTab = () => {
  return (
    <main className="w-full h-full flex">
      <TagsGallery TabTags={ComponentsTag} renderingOn="components-tab" />
    </main>
  );
};

export default ComponentsTab;
