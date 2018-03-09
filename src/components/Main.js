import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Single from "./Single";
import PhotoGrid from "./PhotoGrid";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Switch>
          <Route path="/" exact render={() => <PhotoGrid {...this.props} />} />
          <Route path="/view/:photoId" render={() => <Single />} />
        </Switch>
      </div>
    );
  }
}

export default Main;
