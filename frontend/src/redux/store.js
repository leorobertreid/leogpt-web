import { configureStore } from '@reduxjs/toolkit'

import userReducer from "./features/user/userSlice";
import conversationReducer from "./features/conversation/conversationSlice";

import { messagesApi } from "./services/messagesApi";
import { authApi } from "./services/authApi";
import { conversationsApi } from "./services/conversationsApi";
import { audioToVideoApi } from "./services/audioToVideoApi";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { throttle } from "lodash";
import settingsReducer from "./features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    conversation: conversationReducer,
    settings: settingsReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [conversationsApi.reducerPath]: conversationsApi.reducer,
    [audioToVideoApi.reducerPath]: audioToVideoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({})
      .concat(messagesApi.middleware)
      .concat(authApi.middleware)
      .concat(conversationsApi.middleware)
      .concat(audioToVideoApi.middleware),
})

setupListeners(store.dispatch);
