import { combineReducers } from "redux";

import posts from "./containers/Posts/reducer";

const rootReducer = combineReducers({
  posts
});

export default rootReducer;
