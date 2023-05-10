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
      query: (name) => `getAllMessages/${name}`,
      providesTags: ['Messages'],
    }),
    createMessage: builder.mutation({
      query: ({name, text}) => ({
        url: "create-text",
        method: "POST",
        body: {user: name, message: text},
      }),
      invalidatesTags: ['Messages'],
    }),
  }),
});

export const { useGetMessageByUserNameQuery, useCreateMessageMutation } = messagesApi;