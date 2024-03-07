import React from "react";
import Comment from "./Comment";
import { H4 } from "./ui/typography";

export default function Comments() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <H4>Komentar (6)</H4>
      {Array.from({ length: 10 }).map((_, i) => (
        <Comment key={i} />
      ))}
    </div>
  );
}
