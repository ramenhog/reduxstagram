import { createStore, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import rootReducer from "./rootReducer";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {}, enhancers);

// https://medium.com/@pshrmn/a-little-bit-of-history-f245306f48dd
// browserHistory keeps track of the full URL
export const history = createHistory();
export default store;
