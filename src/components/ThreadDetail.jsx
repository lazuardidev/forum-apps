import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { FaComment } from "react-icons/fa";
import VoteButton from "./VoteButton";
import postedAt from "../utils";

export default function ThreadDetail({
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
  authUser,
}) {
  return (
    <>
      <div>
        <p className="text-secondary text-sm mb-4">#{category}</p>
        <h2 className="text-primary text-2xl font-bold mb-2">{title}</h2>
        <div className="text-primary mb-4">{parse(body)}</div>
      </div>
      <div className="flex items-center mt-2">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neturalizeVote={neturalizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <FaComment className="text-primary ml-4" size={16} />
        <p className="text-primary ml-2">{postedAt(createdAt)}</p>
        <p className="text-primary ml-2">
          <span className="flex items-center space-x-2">
            Dibuat Oleh
            <img
              src={owner.avatar}
              alt="Avatar Icon"
              className="w-5 h-5 ml-2 mr-1 rounded-full"
            />
            {owner.name}
          </span>
        </p>
      </div>
    </>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};
