import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./features/user/userSlice";
import conversationReducer from "./features/conversation/conversationSlice";

import { messagesApi } from "./services/messagesApi";
import { authApi } from "./services/authApi";
import { conversationsApi } from "./services/conversationsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    conversation: conversationReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [conversationsApi.reducerPath]: conversationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({})
      .concat(messagesApi.middleware)
      .concat(authApi.middleware)
      .concat(conversationsApi.middleware),
})

setupListeners(store.dispatch);
