import React from "react";
import LoadingBar from "react-redux-loading-bar";
import LoadingStyled from "./styled/LoadingStyled";

export default function Loading() {
  return (
    <LoadingStyled>
      <LoadingBar showFastActions />
    </LoadingStyled>
  );
}
