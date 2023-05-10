import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./features/user/userSlice"

import { messagesApi } from "./services/messagesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat([messagesApi.middleware]),
})

setupListeners(store.dispatch);
