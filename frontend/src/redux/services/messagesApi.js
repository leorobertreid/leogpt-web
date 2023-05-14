import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/rest/",
  }),
  tagTypes: ['Messages'],
  endpoints: (builder) => ({
    getMessageByUserName: builder.query({
      query: ({username, token}) => ({
          url: `messages/${username}`,
          headers: {"authentication-token": token}
        }),
        providesTags: ['Messages'],
    }),
    createMessage: builder.mutation({
      query: ({username, text, token}) => ({
        url: "messages",
        method: "POST",
        body: {username: username, message: text},
        headers: {"authentication-token": token}
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const { useGetMessageByUserNameQuery, useCreateMessageMutation } = messagesApi;