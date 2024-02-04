import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import VoteButton from "./VoteButton";
import postedAt from "../utils";
import { userShape } from "./ThreadItem";

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <>
      <div>
        <div className="flex flex-row  justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={owner.avatar}
              alt="Avatar Icon"
              className="w-12 h-12 rounded-full"
            />
            <div className="font-bold">{owner.name}</div>
          </div>
          <div className="self-center">
            <div className="">{postedAt(createdAt)}</div>
          </div>
        </div>
        <div className="mt-2 ml-16">
          <div className="font-medium">{parse(content)}</div>
        </div>
      </div>
      <div className="pt-4 ml-16">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
      <hr className="border my-4" />
    </>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export { commentShape };
