import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Link, Switch } from "react-router-dom";
import * as actions from "./actions";
import PostItem from "./PostItem";
import Photo from "../../components/Photo";

class PhotoGrid extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div className="photo-grid">
        {items.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
}

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Switch>
          <Route path="/" exact render={() => <PhotoGrid {...this.props} />} />
          <Route
            path="/view/:photoId"
            render={props => <PostItem {...this.props} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { posts: { comments, items } } = state;
  return {
    comments,
    items
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
