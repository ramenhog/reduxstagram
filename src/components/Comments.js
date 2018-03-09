import React, { Component } from "react";

class Comments extends Component {
  renderComment = (comment, i) => {
    const { removeComment, postId } = this.props;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            onClick={() => removeComment(postId, i)}
            className="remove-comment"
          >
            &times;
          </button>
        </p>
      </div>
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addComment, postId } = this.props;
    addComment(postId, this.refs.author.value, this.refs.comment.value);
    this.refs.commentForm.reset();
  };

  renderCommentForm = () => {
    return (
      <form
        className="comment-form"
        ref="commentForm"
        onSubmit={this.handleSubmit}
      >
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    );
  };

  render() {
    const { comments = [] } = this.props;
    return (
      <div className="comments">
        {comments.map(this.renderComment)}
        {this.renderCommentForm()}
      </div>
    );
  }
}

export default Comments;
