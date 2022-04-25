import { createSlice, configureStore } from "@reduxjs/toolkit";

// reducer
const initialState = { counter: 0, showCounter: true };

// reducer in redux-toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState, // equal to:  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// state store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// actions
export const counterActions = counterSlice.actions;
// console.log(counterSlice.actions.increase());

// connecting the components with Redux
export default store;

// ----------------------------------------------------
// react-redux library

// import { createStore } from "redux";

// // reducer
// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// // state store
// const store = createStore(counterReducer);

// // connecting the components with Redux
// export default store;
