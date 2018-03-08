// increment likes
export function incrementLikes(postIndex) {
  return {
    type: "INCREMENT_LIKES",
    postIndex
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADDED_COMMENT",
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, commentIndex) {
  return {
    type: "REMOVED_COMMENT",
    postId,
    commentIndex
  };
}
