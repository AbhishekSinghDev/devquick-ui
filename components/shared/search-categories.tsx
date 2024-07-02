import React from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { IoSearch } from "react-icons/io5";

const SearchCategories = () => {
  return (
    <div className="max-w-lg mx-auto w-full flex items-center justify-center gap-2">
      <Input
        type="search"
        placeholder="Search catgories..."
        className="text-sm"
      />
      <Button asChild size="sm">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <IoSearch />
          <p>Search</p>
        </div>
      </Button>
    </div>
  );
};

export default SearchCategories;
