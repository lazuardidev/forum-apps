import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <div className="mt-6">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          id="fullName"
          name="fullName"
          value={name}
          onChange={onNameChange}
          placeholder="Full Name"
        />
      </div>
      <div className="mb-4">
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
      <div className="mb-4">
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
        className="w-full bg-blue-500 text-white p-2 rounded-md"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
