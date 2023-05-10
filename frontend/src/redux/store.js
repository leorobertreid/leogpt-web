import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./features/user/userSlice"
import chatReducer from "./features/chat/chatSlice"

import { messagesApi } from "./services/messagesApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({}).concat([messagesApi.middleware]),
})

setupListeners(store.dispatch);
