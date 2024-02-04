import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Register from "./pages/Register";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import Detail from "./pages/Detail";
import AddThread from "./pages/AddThread";
import Leaderboard from "./pages/Leaderboard";
import Loading from "./components/Loading";
import NotFound from "./pages/NotFound";

export default function App() {
  const { isPreload = [], authUser } = useSelector(
    (state) => ({
      isPreload: state.isPreload,
      authUser: state.authUser,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Loading />
      <Navigation authUser={authUser} signOut={onSignOut} />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddThread />} />
        <Route path="/leaderboards" element={<Leaderboard />} />
        <Route path="/thread/:threadId" element={<Detail />} />
      </Routes>
    </>
  );
}
