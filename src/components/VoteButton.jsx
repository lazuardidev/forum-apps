import React from "react";
import PropTypes from "prop-types";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaRegThumbsDown,
  FaRegThumbsUp,
} from "react-icons/fa";

export default function VoteButton({
  id,
  upVote,
  downVote,
  neturalizeVote,
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    neturalizeVote(id);
  };

  return (
    <div className="flex items-center">
      {isUpVoted ? (
        <FaThumbsUp
          onClick={onNeutralizeVoteClick}
          className="cursor-pointer focus:outline-none"
        />
      ) : (
        <FaRegThumbsUp
          onClick={onUpVoteClick}
          className="cursor-pointer focus:outline-none"
        />
      )}
      <span className="ml-1">{upVotesBy.length}</span>
      {isDownVoted ? (
        <FaThumbsDown
          onClick={onNeutralizeVoteClick}
          className="cursor-pointer focus:outline-none ml-6"
        />
      ) : (
        <FaRegThumbsDown
          onClick={onDownVoteClick}
          className="cursor-pointer focus:outline-none ml-6"
        />
      )}
      <span className="ml-1 mr-2">{downVotesBy.length}</span>
    </div>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};
