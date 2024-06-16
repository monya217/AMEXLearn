// playerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  playing: false,
  controls: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
  },
});

export const { setCurrent, setPlaying, setControls } = playerSlice.actions;
export default playerSlice.reducer;
