import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const conversationsApi = createApi({
  reducerPath: "conversationsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL + "rest/",
  }),
  tagTypes: ['Conversations'],
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: ({username, token}) => ({
          url: `conversations/${username}`,
          headers: {"authentication-token": token}
        }),
        providesTags: ['Conversations'],
    }),
    createConversation: builder.mutation({
      query: ({username, name, token}) => ({
        url: "conversations",
        method: "POST",
        body: {username, name},
        headers: {"authentication-token": token}
      }),
      invalidatesTags: ['Conversations'],
    }),
  }),
});

export const { useGetConversationsQuery, useCreateConversationMutation } = conversationsApi;