const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// central store
const store = redux.createStore(counterReducer);

// subscriber fucntion
const counterSubscribder = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscribder);

// action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
