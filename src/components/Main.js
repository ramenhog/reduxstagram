import React from "react";
import { Route, Link } from "react-router-dom";
import Single from "./Single";
import PhotoGrid from "./PhotoGrid";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Route path="/" exact render={() => <PhotoGrid {...this.props} />} />
        <Route path="/view/:photoId" component={Single} />
      </div>
    );
  }
}

export default Main;
