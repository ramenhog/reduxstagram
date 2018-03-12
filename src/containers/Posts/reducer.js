import comments from "../../data/comments";
import { default as items } from "../../data/posts";

const initialState = {
  items,
  comments
};

function posts(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT_LIKES": {
      const { postIndex } = action;
      return {
        ...state,
        items: [
          ...state.items.slice(0, postIndex),
          {
            ...state.items[postIndex],
            likes: state.items[postIndex].likes + 1
          },
          ...state.items.slice(postIndex + 1)
        ]
      };
    }
    case "ADDED_COMMENT": {
      const { author, comment, postId } = action;
      const postComments = state.comments[postId] || [];
      return {
        ...state,
        comments: {
          ...state.comments,
          [postId]: [
            ...postComments,
            {
              text: comment,
              user: author
            }
          ]
        }
      };
    }
    case "REMOVED_COMMENT": {
      const { commentIndex, postId } = action;
      return {
        ...state,
        comments: {
          ...state.comments,
          [postId]: [
            ...state.comments[postId].slice(0, commentIndex),
            ...state.comments[postId].slice(commentIndex + 1)
          ]
        }
      };
    }
    default:
      return state;
  }
}

export default posts;
