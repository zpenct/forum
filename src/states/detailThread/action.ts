import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "@/lib/api";
import { IThread } from "../../../@types";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  UP_VOTE_THREAD_DETAIL: "UP_VOTE_THREAD_DETAIL",
  DOWN_VOTE_THREAD_DETAIL: "DOWN_VOTE_THREAD_DETAIL",
  NEUTRALIZE_VOTE_THREAD_DETAIL: "NEUTRALIZE_VOTE_THREAD_DETAIL",
  CREATE_COMMENT: "CREATE_COMMENT",
  UP_VOTE_COMMENT: "UP_VOTE_COMMENT",
  DOWN_VOTE_COMMENT: "DOWN_VOTE_COMMENT",
  NEUTRALIZE_VOTE_COMMENT: "NEUTRALIZE_VOTE_COMMENT",
};

function receiveThreadDetailActionCreator(threadDetail: IThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}
function upVoteThreadDetailActionCreator(userId: string) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId: string) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeVoteThreadDetailActionCreator(userId: string) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}
function createCommentActionCreator(comment: string) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator(commentId: string, userId: string) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId: string, userId: string) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator(commentId: string, userId: string) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId: string) {
  return async (dispatch: any) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error: any) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch: any, getState: any) => {
    const { detailThread, authUser } = getState();
    dispatch(upVoteThreadDetailActionCreator(authUser?.id));
    try {
      await api.upVoteThread(detailThread.id);
    } catch (error: any) {
      alert(error.message);
    }
  };
}
function asyncDownVoteThreadDetail() {
  return async (dispatch: any, getState: any) => {
    const { detailThread, authUser } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.downVoteThread(detailThread.id);
    } catch (error: any) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeVoteThreadDetail() {
  return async (dispatch: any, getState: any) => {
    const { detailThread, authUser } = getState();
    dispatch(neutralizeVoteThreadDetailActionCreator(authUser.id));
    try {
      await api.neutralVoteComment(detailThread.id);
    } catch (error: any) {
      alert(error.message);
    }
  };
}

function asyncCreateComment({ content }: { content: string }) {
  return async (dispatch: any, getState: any) => {
    dispatch(showLoading());
    const { detailThread } = getState();
    try {
      const comment = await api.createComment({
        content,
        threadId: detailThread.id,
      });
      dispatch(createCommentActionCreator(comment));
    } catch (error: any) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId: any) {
  return async (dispatch: any, getState: any) => {
    const { authUser, detailThread } = getState();
    dispatch(upVoteCommentActionCreator(commentId, authUser.id));
    try {
      const data = { threadId: detailThread.id, commentId };
      await api.upVoteComment(data);
    } catch (error: any) {
      alert(error.message);
    }
  };
}

function asyncDownVoteComment(commentId:string) {
  return async (dispatch:any, getState:any) => {
    const { authUser, detailThread } = getState();
    dispatch(downVoteCommentActionCreator(commentId, authUser.id));
    try {
        const data = { threadId: detailThread.id, commentId };
      await api.downVoteComment(data);
    } catch (error:any) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeVoteComment(commentId:string) {
  return async (dispatch:any, getState:any) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeVoteCommentActionCreator(commentId, authUser.id));
    try {
        const data = { threadId: detailThread.id, commentId };
      await api.neutralVoteComment(data);
    } catch (error:any) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
