import React from "react";
import { AvatarImage, Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { H4, Paragraph } from "./ui/typography";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";

export default function Comment() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {/* <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly6aCBmy8OEyGCtSVCjeeSyTIdx5VwvW8nw&usqp=CAU" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <div className="w-7 h-7 rounded-full bg-blue-600"></div>
          <H4 className="font-bold">Dimas</H4>
        </div>

        <span className="text-xs text-slate-500">10 Menit yang lalu</span>
      </div>

      <div className="mt-3">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          labore?
        </Paragraph>
      </div>

      <div className="flex gap-5 items-center mb-3">
        <span className="flex items-center justify-center">
          <TiThumbsUp />5
        </span>
        <span className="flex items-center justify-center">
          <TiThumbsDown />5
        </span>
      </div>
    </div>
  );
}
