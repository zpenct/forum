import React from "react";
import Comment from "./Comment";
import { H4 } from "../ui/typography";
import { IComment } from "../../../@types";

export default function Comments({
  comments,
  upVoteComment,
  downVoteComment,
}: {
  comments: any;
  upVoteComment: any;
  downVoteComment: any;
}) {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <H4>Komentar ({comments?.length})</H4>
      {comments?.map((comment: IComment) => (
        <Comment
          key={comment.id}
          comment={comment}
          upVoteComment={upVoteComment}
          downVoteComment={downVoteComment}
        />
      ))}
    </div>
  );
}
