import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./features/user/userSlice"

import { messagesApi } from "./services/messagesApi";
import { authApi } from "./services/authApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({})
      .concat(messagesApi.middleware)
      .concat(authApi.middleware),
})

setupListeners(store.dispatch);
