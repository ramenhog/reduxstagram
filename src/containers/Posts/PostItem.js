import React from "react";
import Photo from "../../components/Photo";
import Comments from "../../components/Comments";

class Single extends React.Component {
  render() {
    const {
      addComment,
      removeComment,
      items,
      comments,
      match: { params: { photoId } }
    } = this.props;

    const index = items.findIndex(post => post.code === photoId);
    const post = items.find(post => post.code === photoId);
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

export default Single;
