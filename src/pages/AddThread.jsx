import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ThreadInput from "../components/ThreadInput";
import { asyncCreateThread } from "../states/threads/action";

export default function AddThread() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Buat Thread Baru</h2>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}
