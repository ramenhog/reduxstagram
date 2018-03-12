import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import Photo from "../../components/Photo";
import Comments from "../../components/Comments";

class Single extends React.Component {
  render() {
    const {
      addComment,
      removeComment,
      posts,
      comments,
      match: { params: { photoId } }
    } = this.props;
    const index = posts.findIndex(post => post.code === photoId);
    const post = posts.find(post => post.code === photoId);

    const postComments = comments[photoId];

    return (
      <div className="single-photo">
        <Photo {...this.props} post={post} comments={comments} i={index} />
        <Comments
          comments={postComments}
          addComment={addComment}
          removeComment={removeComment}
          postId={photoId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { comments, posts } = state;
  return {
    posts,
    comments
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const SingleContainer = connect(mapStateToProps, mapDispatchToProps)(Single);

export default SingleContainer;
