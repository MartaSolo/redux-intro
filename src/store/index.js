import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// state store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

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
