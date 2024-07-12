import React from "react";

import HeaderRecord from "@/template/sections/header/header-record";
import ExploreGallery from "@/components/shared/explore-gallery";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <div className="py-10">
        <h1 className="text-4xl font-bold">Explore Headers</h1>
      </div>
      <div>
        <ExploreGallery ExploreRecord={HeaderRecord} />
      </div>
    </div>
  );
};

export default page;
