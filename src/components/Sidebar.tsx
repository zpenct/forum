import React from "react";
import { H4 } from "./ui/typography";
import Profile from "./Profile";
import NewThread from "./NewThread";

export default function Sidebar() {
  return (
    <div className="bg-slate-50 rounded-md p-5 md:min-h-[100dvh] sticky top-0">
      <Profile />
      <NewThread />
      <div className="mt-10">
        <H4>Trending Topic</H4>
        <div className="flex flex-wrap gap-3 mt-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="p-1 px-1.5 text-sm rounded-md border-[1.2px] border-slate-400"
            >
              #Redux
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
