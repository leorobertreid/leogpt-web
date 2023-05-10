import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chatContent: "",
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chatContent = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName } = chatSlice.actions

export default chatSlice.reducer