import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Single from "../containers/Single/Single";
import Posts from "../containers/Posts/Posts";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Switch>
          <Route path="/" exact render={() => <Posts {...this.props} />} />
          <Route path="/view/:photoId" component={Single} />
        </Switch>
      </div>
    );
  }
}

export default Main;
