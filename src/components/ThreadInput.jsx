import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  return (
    <div className="ml-2 mt-4 mb-8">
      <div className="mb-2">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Judul"
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Kategori"
          value={category}
          onChange={onCategoryChange}
        />
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        rows="4"
        placeholder="Masukkan Ide Kamu"
        value={body}
        onChange={onBodyChange}
      />
      <button
        type="button"
        className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md"
        onClick={() => addThread({ title, body, category })}
      >
        Kirim
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
