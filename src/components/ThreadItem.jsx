import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { FaComment } from "react-icons/fa";
import VoteButton from "./VoteButton";
import postedAt from "../utils";
import CardStyled from "./styled/CardStyled";

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neturalizeVote,
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <CardStyled>
      <button type="button" className="text-left" onClick={onThreadClick}>
        <p className="text-secondary text-sm mb-4">#{category}</p>
        <h2 className="text-primary text-2xl font-bold mb-2">{title}</h2>
        <div className="text-primary mb-4">{parse(body)}</div>
      </button>
      <div className="flex items-center mt-2">
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <FaComment className="text-primary ml-4" size={16} />
        <p className="text-primary ml-2">{totalComments}</p>
        <p className="text-primary ml-4">{postedAt(createdAt)}</p>
        <p className="text-primary ml-4">Dibuat Oleh {threadOwner.name}</p>
      </div>
    </CardStyled>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };
