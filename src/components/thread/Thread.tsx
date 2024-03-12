import { H2 } from "../ui/typography";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";

export default function Thread({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  userLogin,
}: {
  id: string;
  title: string;
  body: string;
  owner: any;
  category: string;
  createdAt: string;
  upVotesBy: string[];
  downVotesBy: string[];
  neturalizeVoteThreadDetail: any;
  upVoteThreadDetail: any;
  downVoteThreadDetail: any;
  userLogin: string | null;
}) {
  const isLiked = upVotesBy?.includes(userLogin as string);
  const isDisliked = downVotesBy?.includes(userLogin as string);
  return (
    <div>
      <span className="p-1 px-1.5 text-sm rounded-md border-[1.2px] border-slate-400">
        #{category}
      </span>
      <div className="my-4">
        <H2>{title}</H2>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
      <div className="flex gap-5 items-center mb-3">
        <span
          className="flex items-center justify-center cursor-pointer"
          onClick={upVoteThreadDetail}
        >
          {isLiked ? <RiThumbUpFill /> : <TiThumbsUp />}
          {upVotesBy?.length}
        </span>
        <span
          className="flex items-center justify-center cursor-pointer"
          onClick={downVoteThreadDetail}
        >
          {isDisliked ? <RiThumbDownFill /> : <TiThumbsDown />}
          {downVotesBy?.length}
        </span>
        <span className="flex items-center justify-center text-xs text-slate-500">
          {new Date(createdAt).toLocaleDateString()}
        </span>
        <span className="flex items-center justify-center text-xs text-slate-500">
          dibuat oleh <p className="font-bold ml-1">{owner?.name}</p>
        </span>
      </div>
    </div>
  );
}
