/**
 * test scenario for threadDetail action
 *
 * - asyncReceiveThreadDetail thunk
 * - should dispatch action correctly when data fetching success
 */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from "vitest";
import api from "../../utils/api";
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from "./action";

const fakeThreadsDetailResponse = [
  {
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
];

describe("asyncReceiveThreadDetail thunk", () => {
  beforeEach(() => {
    // backup original implementation
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    // restore original implementation
    api.getThreadDetail = api._getThreadDetail;

    // delete backup
    delete api._getThreadDetail;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    // arrange
    // stub implementation
    api.getThreadDetail = () => Promise.resolve(fakeThreadsDetailResponse);
    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncReceiveThreadDetail()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadsDetailResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
