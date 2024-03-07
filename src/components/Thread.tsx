import React from "react";
import { Paragraph, H2 } from "./ui/typography";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import NewComment from "./NewComment";
import Comments from "./ListComments";
export default function Thread() {
  return (
    <div className="p-3">
      <span className="p-1 px-1.5 text-sm rounded-md border-[1.2px] border-slate-400">
        #Redux
      </span>
      <div className="my-4">
        <H2>Bagaimana pengalamanmu belajar Redux?</H2>
        <Paragraph className="mt-10">
          Coba ceritakan dong, gimana pengalaman kalian belajar Redux di
          Dicoding?
        </Paragraph>
      </div>
      <div className="flex gap-5 items-center mb-3">
        <span className="flex items-center justify-center">
          <TiThumbsUp />5
        </span>
        <span className="flex items-center justify-center">
          <TiThumbsDown />5
        </span>
        <span className="flex items-center justify-center text-xs text-slate-500">
          Dibuat 10 hari yang lalu
        </span>
        <span className="flex items-center justify-center text-xs text-slate-500">
          dibuat oleh <p className="font-bold ml-1">Dimas</p>
        </span>
      </div>

      {/* Komentar */}
      <NewComment />
      <Comments />
    </div>
  );
}
