import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="mt-2">
      <div>
        <input
          type="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          id="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email Address"
        />
      </div>
      <div className="mt-4">
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-md"
          id="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-6 bg-blue-500 text-white p-2 rounded-md"
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
