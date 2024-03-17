import React from "react";
import { Paragraph, H4 } from "../ui/typography";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import { BiComment } from "react-icons/bi";
import Link from "next/link";
import { IThread } from "../../../@types";
import postedDate from "@/lib/utils";

export default function ThreadPreview({ thread }: { thread: IThread }) {
  return (
    <div className="p-3 border-b-[1px] border-slate-300 max-w-[390px] md:max-w-full">
      <Link href={`/threads/${thread.id}`}>
        <span className="p-1 px-1.5 text-sm rounded-md border-[1.2px] border-slate-400">
          #{thread.category}
        </span>
        <div className="mt-4">
          <H4>{thread.title}</H4>
          {/* <Paragraph>{thread.body}</Paragraph> */}
          <div dangerouslySetInnerHTML={{ __html: thread.body }} />
        </div>
        <div className="flex items-center gap-2 my-2">
          <div className="w-5 h-5 rounded-full bg-blue-600"></div>
          <div className="flex gap-2">
            <Paragraph className="font-bold text-xs">
              {thread.ownerId}
            </Paragraph>
            <span className="text-xs text-slate-500">{postedDate(thread.createdAt)}</span>
          </div>
        </div>
      </Link>
      <div className="flex gap-5 items-center mt-4">
        <span className="flex items-center justify-center gap-1">
          <TiThumbsUp />
          <span className="text-xs">{thread.upVotesBy.length}</span>
        </span>
        <span className="flex items-center justify-center gap-1">
          <TiThumbsDown />
          <span className="text-xs">{thread.downVotesBy.length}</span>
        </span>
        <span className="flex items-center justify-center gap-1">
          <BiComment />
          <span className="text-xs">{thread.totalComments}</span>
        </span>
      </div>
    </div>
  );
}
