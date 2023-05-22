import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "",
  authToken: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username
    },
    setToken: (state, action) => {
      state.authToken = action.payload.authToken
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer