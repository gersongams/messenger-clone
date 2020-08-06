import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../index";

interface PlayListState {
  isLoading: boolean;
  error: string | null;
}

const playListInitialState: PlayListState = {
  isLoading: false,
  error: null,
};

const playlist = createSlice({
  name: "playlist",
  initialState: playListInitialState,
  reducers: {
    getPlaylistStart(state: PlayListState) {
      state.isLoading = true;
    },
    getPlaylistFailure(state: PlayListState, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getPlaylistStart, getPlaylistFailure } = playlist.actions;

export default playlist.reducer;

export const fetchPlaylist = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getPlaylistStart());
  } catch (err) {
    dispatch(getPlaylistFailure(err.toString()));
  }
};
