import { hideLoading, showLoading } from "react-redux-loading-bar";
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from "vitest";
import api from "../../utils/api";
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from "./action";

const fakeThreadsDetailResponse = [
  {
    id: "thread-1",
    title: "Thread Pertama",
    body: "Ini adalah thread pertama",
    category: "General",
    createdAt: "2021-06-21T07:00:00.000Z",
    owner: {
      id: "users-1",
      name: "John Doe",
      avatar: "https://generated-image-url.jpg",
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: "comment-1",
        content: "Ini adalah komentar pertama",
        createdAt: "2021-06-21T07:00:00.000Z",
        owner: {
          id: "users-1",
          name: "John Doe",
          avatar: "https://generated-image-url.jpg",
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  },
];

describe("asyncReceiveThreadDetail thunk", () => {
  // jest.setTimeout(80000);
  beforeEach(() => {
    // backup original implementation
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    // restore original implementation
    api.getThreadDetail = api._getThreadDetail;
  });

  // delete backup
  delete api._getThreadDetail;

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
