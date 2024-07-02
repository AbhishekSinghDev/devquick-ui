import React from "react";

import Hero from "@/components/sections/hero";
import SearchCategories from "@/components/shared/search-categories";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionsTab from "@/components/tabs/sections-tab";
import ComponentsTab from "@/components/tabs/components-tab";
import PopularClonesTab from "@/components/tabs/popular-clones-tab";

const page = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4">
      <Hero />
      <div className="md:flex items-center justify-center hidden">
        <SearchCategories />
      </div>
      <div className="flex items-center justify-start mt-10">
        <Tabs defaultValue="sections" className="w-full">
          <TabsList>
            <TabsTrigger value="sections">Sections</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="popular-clones">Popular Clones</TabsTrigger>
          </TabsList>
          <TabsContent value="sections" className="w-full">
            <SectionsTab />
          </TabsContent>
          <TabsContent value="components" className="w-full">
            <ComponentsTab />
          </TabsContent>
          <TabsContent value="popular-clones" className="w-full">
            <PopularClonesTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default page;
