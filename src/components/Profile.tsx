import React from "react";
import { H3 } from "./ui/typography";
import { BiLogOut } from "react-icons/bi";

export default function Profile() {
  return (
    <div className="my-2 bg-slate-50 border-b-1 border-slate-300">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-blue-600"></div>
          <H3 className="font-bold">Dimas</H3>
        </div>
        <BiLogOut size={24} />
      </div>
    </div>
  );
}
