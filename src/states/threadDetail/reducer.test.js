/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducers function
 * - should return the initial state when given by unknown action
 * - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 */

import {
  describe, it, expect,
} from "vitest";
import threadDetailReducer from "./reducer";

describe("threadDetailReducers function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the thread detail when given by RECEIVE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREAD_DETAIL",
      payload: {
        threadDetail: {
          id: "thread-Np47p4jhUXYhrhRn",
          title: "Bagaimana pengalamanmu belajar Redux?",
          body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
          createdAt: "2023-05-29T07:55:52.266Z",
          owner: {
            id: "user-mQhLzINW_w5TxxYf",
            name: "Dimas Saputra",
            avatar: "https://ui-avatars.com/api/?name=Dimas Saputra&background=random"
          },
          category: "redux",
          comments: [
            {
              id: "comment-qUXTCZW8NsfBbzF1",
              content: "begitu syulittt....",
              createdAt: "2024-02-05T16:45:13.778Z",
              owner: {
                id: "user-d1SNsKFyt-hfbnhw",
                name: "test11",
                avatar: "https://ui-avatars.com/api/?name=test11&background=random"
              },
              upVotesBy: [],
              downVotesBy: []
            }
          ],
          upVotesBy: [],
          downVotesBy: []
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
});
