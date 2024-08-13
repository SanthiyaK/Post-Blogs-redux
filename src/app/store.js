import { configureStore } from "@reduxjs/toolkit";
/* import CounterReducer from "../features/counter/counterSlice" */
import postReducer from '../features/counter/postSlice'
import userReducer from '../features/counter/UserSlice'
export const store = configureStore({
    reducer: {
      /*  counter: CounterReducer, */
      posts: postReducer,
      users: userReducer
    }
})