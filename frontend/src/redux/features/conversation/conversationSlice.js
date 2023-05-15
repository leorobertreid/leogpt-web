import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  conversation: "",
}

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    setConversation: (state, action) => {
      state.conversation = action.payload.conversation
    },
  },
})

// Action creators are generated for each case reducer function
export const { setConversation } = conversationSlice.actions

export default conversationSlice.reducer