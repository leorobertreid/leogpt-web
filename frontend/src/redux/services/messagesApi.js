import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/rest/",
  }),
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: ({username, conversation, token}) => ({
          url: `messages/${username}/${conversation}`,
          headers: {"authentication-token": token}
        }),
        providesTags: ['Messages'],
    }),
    createMessage: builder.mutation({
      query: ({username, text, conversation, token}) => ({
        url: "message",
        method: "POST",
        body: {username: username, message: text, conversation},
        headers: {"authentication-token": token}
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const { useGetMessagesQuery, useCreateMessageMutation } = messagesApi;