import { createStore } from "redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./reducers";

import comments from "./data/comments";
import posts from "./data/posts";

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

// https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd
// browserHistory keeps track of the full URL
export const history = createHistory();
export default store;