import React from "react";
import { BiSearchAlt } from "react-icons/bi";
export default function Search() {
  return (
    <div className="w-full relative peer-focus:bg-abu overflow-hidden flex items-center h-12 rounded-md border">
      <span className=" px-2 text-lg">
        <BiSearchAlt />
      </span>
      <input
        className="w-full   peer h-full outline-none"
        placeholder="Search any task"
      />
    </div>
  );
}
