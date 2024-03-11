import React from "react";
import ListThreads from "@/components/thread/ListThreads";
import NewThread from "@/components/thread/NewThread";

export default function HomePage() {
  return (
    <div>
      <div className="md:pl-10 mb-10 md:sticky md:top-0 md:pt-10 bg-white px-2 md:px-0">
        <NewThread />
      </div>
      <ListThreads />
    </div>
  );
}
