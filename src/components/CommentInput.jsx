import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import TextareaStyled from "./styled/TextareaStyled";

export default function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput("");

  const onCommentSubmit = () => {
    addComment(comment);
    setComment("");
  };

  return (
    <div className="my-5">
      <div className="block font-bold text-sm text-primary">
        Beri Komentar
      </div>
      <div className="mt-1">
        <TextareaStyled
          rows={4}
          value={comment}
          onChange={onCommentChange}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded-md"
          onClick={onCommentSubmit}
        >
          Kirim
        </button>
      </div>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
