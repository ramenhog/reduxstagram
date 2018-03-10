// reducer takes in two things:
// 1. action (info about what happened)
// 2. copy of current state slice
//
// reducers will run every time an action is dispatched
// whether something changes in state is up to us

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      const { postIndex } = action;
      return [
        ...state.slice(0, postIndex),
        { ...state[postIndex], likes: state[postIndex].likes + 1 },
        ...state.slice(postIndex + 1)
      ];
    default:
      return state;
  }
}

export default posts;
