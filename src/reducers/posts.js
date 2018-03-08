// reducer takes in two things:
// 1. action (info about what happened)
// 2. copy of current state slice

function posts(state = [], action) {
  console.log("The post will change");
  console.log(state, action);
  return state;
}

export default posts;
