// import Thread from "@/components/thread/Thread";
// import React from "react";

// export default function page() {
//   return (
//     <div className="md:pl-10 max-w-3xl mt-16">
//       <Thread />
//     </div>
//   );
// }

"use client";
import Thread from "@/components/thread/Thread";
import NewComment from "@/components/comment/NewComment";
import Comments from "@/components/comment/ListComments";
import { useParams } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from "@/states/detailThread/action";
import { useRouter } from "next/navigation";

export default function DetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { detailThread, authUser } = useAppSelector((states) => states);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id as string));
  }, [id, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
    alert("liked");
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeturalizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content: any) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id: string) => {
    dispatch(asyncUpVoteComment(id));
    alert("Comment liked");
  };

  const onDownVoteComment = (id: string) => {
    dispatch(asyncDownVoteComment(id));
    alert("Comment disliked");
  };

  const onNeturalizeVoteComment = (id: string) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (!detailThread) {
    return <div>Loading...</div>;
  }

  // if (!authUser?.id) {
  //   router.push("/login");
  // }

  return (
    <div className="p-3 md:mt-10 md:pl-10 md:max-w-3xl">
      <Thread
        {...detailThread}
        userLogin={authUser?.id}
        downVoteThreadDetail={onDownVoteThreadDetail}
        upVoteThreadDetail={onUpVoteThreadDetail}
        neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail}
      />
      {/* Komentar */}
      <NewComment />
      <Comments
        comments={detailThread?.comments}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
      />
    </div>
  );
}
