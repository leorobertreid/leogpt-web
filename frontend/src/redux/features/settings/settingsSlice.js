import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadAudio: false,
  loadVideo: false,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLoadVideo: (state, action) => {
      state.loadVideo = action.payload.loadVideo
    },
    setLoadAudio: (state, action) => {
      state.loadAudio = action.payload.loadAudio
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoadVideo, setLoadAudio } = settingsSlice.actions

export default settingsSlice.reducer