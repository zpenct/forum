import React from "react";
import { H4, Paragraph } from "../ui/typography";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";
import { IComment } from "../../../@types";
import Image from "next/image";
import postedDate from "@/lib/utils";

export default function Comment({
  comment,
  upVoteComment,
  downVoteComment,
}: {
  comment: IComment;
   upVoteComment: any;
  downVoteComment: any;
}) {
  const { id,upVotesBy, downVotesBy, createdAt, content, owner } = comment;
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            alt={owner?.id}
            src={owner?.avatar}
            width={20}
            height={20}
            className="w-7 h-7 rounded-full bg-blue-600"
          />
          <H4 className="font-bold">{owner?.name}</H4>
        </div>

        <span className="text-xs text-slate-500">{postedDate(createdAt)}</span>
      </div>

      <div className="mt-3">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div className="flex gap-5 items-center mb-3">
        <span className="flex items-center justify-center cursor-pointer" onClick={() =>upVoteComment(id)}>
          <TiThumbsUp />
          {upVotesBy?.length}
        </span>
        <span className="flex items-center justify-center cursor-pointer" onClick={() => downVoteComment(id)}>
          <TiThumbsDown />
          {downVotesBy?.length}
        </span>
      </div>
    </div>
  );
}
