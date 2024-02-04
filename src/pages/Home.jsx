import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import ThreadsList from "../components/ThreadsList";
import asyncPopulateUsersAndThreads from "../states/shared/action";
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from "../states/threads/action";

export default function Home() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((state) => ({
    threads: state.threads,
    users: state.users,
    authUser: state.authUser,
  }), shallowEqual);

  const categories = Array.from(
    new Set(threads.map((thread) => thread.category))
  );

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeturalizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap mb-2 mx-[16%]">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(filter === category ? "" : category)}
            className={`${
              filter === category ? "bg-blue-500 text-white" : "border-blue-500"
            } border px-4 py-2 rounded mr-2 mb-2`}
          >
            {`#${category}`}
          </button>
        ))}
      </div>
      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neturalizeVote={onNeturalizeVoteThread}
      />
      <Link
        to="/new"
        className="fixed bottom-4 right-4 bg-blue-500 p-4 rounded-full"
      >
        <FaPlus color="white" />
      </Link>
    </div>
  );
}
