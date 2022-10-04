import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  games: {
    gameList: [],
    isLoaded: false,
  },
};

export const fetchGames = createAsyncThunk("games", () => {
  return axios
    .post(
      "https://api.igdb.com/v4/games",
      {},
      {
        headers: {
          'Client-ID': "wegq81vje44p8a15jgbvirtaj5dent",
          'Authorization': "Bearer fv1qdteaatkgnwsh0p1kic32zv830y",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
  extraReducers: {
    [fetchGames.fulfilled]: (state, action) => {
      state.games.gameList = action.payload;
      state.games.isLoaded = true;
    },
  },
});

export const { addAnimals, loadingEnded } = userSlice.actions;

export default userSlice.reducer;
