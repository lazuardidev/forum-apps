/**
 * test scenario for threadReducer
 *
 * - threadReducers function
 * - should return the initial state when given by unknown action
 * - should return the threads when given by RECEIVE_THREADS action
 */

import {
  describe, it, expect,
} from "vitest";
import threadReducer from "./reducer";

describe("threadReducer  function", () => {
  it("should return the initial state when given by unknown action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            id: "thread-Np47p4jhUXYhrhRn",
            title: "Bagaimana pengalamanmu belajar Redux?",
            body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
            category: "redux",
            createdAt: "2023-05-29T07:55:52.266Z",
            ownerId: "user-mQhLzINW_w5TxxYf",
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: []
          },
          {
            id: "thread-91KocEqYPRz68MhD",
            title: "Halo! Selamat datang dan silakan perkenalkan diri kamu",
            body: "Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?",
            category: "perkenalan",
            createdAt: "2023-05-29T07:54:35.746Z",
            ownerId: "user-aROWej8yYA1sOfHN",
            totalComments: 1,
            upVotesBy: [
                "user-mQhLzINW_w5TxxYf"
            ],
            downVotesBy: []
          }
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
});
