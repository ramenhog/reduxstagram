// reducer takes in two things:
// 1. action (info about what happened)
// 2. copy of current state slice

function postComments(state = [], action) {
  switch (action.type) {
    case "ADDED_COMMENT":
      const { author, comment } = action;
      return [
        ...state,
        {
          text: comment,
          user: author
        }
      ];
    case "REMOVED_COMMENT":
      const { commentIndex } = action;
      return [
        ...state.slice(0, commentIndex),
        ...state.slice(commentIndex + 1)
      ];
    default:
      return state;
  }
}

function comments(state = {}, action) {
  const { postId } = action;
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
