import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AvatarStyled from "./styled/AvatarStyled";

export default function Navigation({ authUser, signOut }) {
  return (
    <div className="pb-10">
      <nav className="bg-white">
        <div className="mx-auto px-4 shadow-lg">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-black">
              Dicoding Forum App
            </Link>
            <div className="flex space-x-4">
              <Link to="/" className="text-black font-semibold">
                THREADS
              </Link>
              <Link to="/leaderboards" className="text-black font-semibold">
                LEADERBOARD
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <AvatarStyled src={authUser.avatar} alt="Avatar Icon" />
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={signOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
};
