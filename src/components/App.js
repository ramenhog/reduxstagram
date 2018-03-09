import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
  const { posts, comments } = state;
  return {
    posts,
    comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// https://github.com/ReactTraining/react-router/issues/4671#issuecomment-285320076
// const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
