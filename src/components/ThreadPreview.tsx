import React from "react";
import { Paragraph, H4 } from "./ui/typography";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import { FaShareFromSquare } from "react-icons/fa6";
import Link from "next/link";
export default function ThreadPreview() {
  return (
    <Link href={"/threads/1"} className="p-3 border-b-[1px] border-slate-300">
      <span className="p-1 px-1.5 text-sm rounded-md border-[1.2px] border-slate-400">
        #Redux
      </span>
      <div className="mt-4">
        <H4>Bagaimana pengalamanmu belajar Redux?</H4>
        <Paragraph>
          Coba ceritakan dong, gimana pengalaman kalian belajar Redux di
          Dicoding?
        </Paragraph>
      </div>
      <div className="flex items-center gap-2 my-2">
        <div className="w-5 h-5 rounded-full bg-blue-600"></div>
        <div className="flex gap-2">
          <Paragraph className="font-bold text-xs">Dimas</Paragraph>
          <span className="text-xs text-slate-500"> 10 Menit yang lalu</span>
        </div>
      </div>
      <div className="flex gap-5 items-center mt-4">
        <span className="flex items-center justify-center">
          <TiThumbsUp />5
        </span>
        <span className="flex items-center justify-center">
          <TiThumbsDown />5
        </span>
        <span className="flex items-center justify-center">
          <FaShareFromSquare />5
        </span>
      </div>
    </Link>
  );
}
