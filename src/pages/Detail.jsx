import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import ThreadDetail from "../components/ThreadDetail";
import CommentInput from "../components/CommentInput";
import CommentsList from "../components/CommentsList";
import NotFound from "./NotFound";
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncCreateComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from "../states/threadDetail/action";
import CardStyled from "../components/styled/CardStyled";

export default function Detail() {
  const { threadId } = useParams();
  const { threadDetail = null, authUser } = useSelector(
    (state) => ({
      threadDetail: state.threadDetail,
      authUser: state.authUser,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail());
  };

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail());
  };

  const onNeturalizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail());
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncCreateComment({ content }));
  };

  const onUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onNeturalizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (threadDetail === null) {
    return <NotFound />;
  }

  return (
    <div className="pb-4 mx-[16%]">
      <CardStyled>
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVoteThreadDetail={onUpVoteThreadDetail}
          downVoteThreadDetail={onDownVoteThreadDetail}
          neturalizeVoteThreadDetail={onNeturalizeVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <h2 className="text-xl font-bold my-4">
          Komentar ({threadDetail.comments.length})
        </h2>
        <CommentsList
          comments={threadDetail.comments}
          authUser={authUser.id}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neturalizeVoteComment={onNeturalizeVoteComment}
        />
      </CardStyled>
    </div>
  );
}
