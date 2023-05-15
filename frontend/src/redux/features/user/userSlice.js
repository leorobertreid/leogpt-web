import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: "testuser6",
  authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyNiIsImlhdCI6MTY4NDA3NjIwOX0.LpDVXjyxPL-B18Tfa77tb47g9Sr_BGgWIModzhQSP1c",
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken } = userSlice.actions

export default userSlice.reducer