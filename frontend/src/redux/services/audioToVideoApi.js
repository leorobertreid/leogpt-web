import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const audioToVideoApi = createApi({
  reducerPath: "audioToVideoApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL + "rest/",
  }),
  endpoints: (builder) => ({
    getVideoFromAudio: builder.mutation({
      query: ({audio, token}) => ({
        url: "audioToVideo",
        method: "POST",
        body: {audio},
        headers: {"authentication-token": token}
      }),
    }),
  }),
});

export const { useGetVideoFromAudioMutation } = audioToVideoApi;