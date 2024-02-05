import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Dicoding Forum Apps
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onLogin}>
          <LoginInput login={onLogin} />
          <div>
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
