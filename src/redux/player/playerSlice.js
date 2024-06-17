import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  playing: false,
  controls: null, // This should be where your controls are stored
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent(state, action) {
      state.current = action.payload;
    },
    setPlaying(state, action) {
      state.playing = action.payload;
    },
    setControls(state, action) {
      state.controls = action.payload; // Set controls here
    },
  },
});

export const { setCurrent, setPlaying, setControls } = playerSlice.actions;
export default playerSlice.reducer;
