import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import LeaderBoardItem from "../components/LeaderboardItem";
import { asyncPopulateLeaderboards } from "../states/leaderboards/action";

export default function Leaderboard() {
  const dispatch = useDispatch();
  const { leaderboards = [] } = useSelector(
    (state) => ({
      leaderboards: state.leaderboards,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <div className="m-8 shadow-lg p-4 mx-[16%]">
      <div className="bg-white p-4 rounded-md">
        <h4 className="text-2xl font-bold mb-4">Leaderboard</h4>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-8">
            <h5 className="text-xl font-bold mb-4">10 Pengguna Teratas</h5>
          </div>
          <div className="col-span-2">
            <h5 className="text-xl font-bold ml-4 mb-4">Skor</h5>
          </div>
        </div>
        {leaderboards.map(({ user, score }) => (
          <LeaderBoardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </div>
  );
}
