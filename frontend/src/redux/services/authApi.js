import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/auth/",
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: ({username, password}) => ({
        url: "login",
        method: "POST",
        body: {username, password},
      }),
    }),
    signUp: builder.mutation({
      query: ({username, email, password}) => ({
        url: "signup",
        method: "POST",
        body: {username, email, password},
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;