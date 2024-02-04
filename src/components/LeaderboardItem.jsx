import React from "react";
import PropTypes from "prop-types";

export default function LeaderBoardItem({ user, score }) {
  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      <div className="col-span-10">
        <div className="flex items-center space-x-2 mt-2">
          <img
            src={user.avatar}
            alt="Avatar Icon"
            className="w-9 h-9 rounded-full ml-2"
          />
          <div className="text-body2 text-primary text-lg font-medium">
            {user.name}
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="text-body2 text-primary text-lg font-medium mt-2 ml-4">
          {score}
        </div>
      </div>
    </div>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
};
