import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import TrackPlayer from 'react-native-track-player';

export const fetchData = createAsyncThunk('fetchData', async () => {
  const res = await axios.get('https://clxmtn-3000.csb.app/music');
  return res.data;
});

const musicSlice = createSlice({
  name: 'music',
  initialState: {
    quotes: {},
    tracks: [],
    playlists: [],
    favorites: [],
    currentTrack: null,
    loading: false,
    error: null,
  },

  reducers: {
    addQuote: (state, action) => {
      state.quotes = action.payload;
    },

    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      const trackToRemove = action.payload;
      state.favorites = state.favorites.filter(
        track => track.id !== trackToRemove,
      );
    },
    playTrack: (state, action) => {
      // Use TrackPlayer API to play the track
      TrackPlayer.reset().then(() => {
        TrackPlayer.add(action.payload);
        TrackPlayer.play();
      });
    },
    pauseTrack: state => {
      // Use TrackPlayer API to pause the track
      TrackPlayer.pause();
    },
    resumeTrack: state => {
      // Use TrackPlayer API to resume the track
      TrackPlayer.play();
    },
    stopTrack: state => {
      // Use TrackPlayer API to stop the track
      TrackPlayer.stop();
    },
    nextTrack: state => {
      TrackPlayer.skipToNext();
    },
    prviousTrack: state => {
      TrackPlayer.skipToPrevious();
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    createPlaylist: (state, action) => {
      const newPlaylist = {
        id: state.playlists.length + 1,
        name: action.payload,
        tracks: [],
      };
      state.playlists.push(newPlaylist);
    },
    deletePlaylist: (state, action) => {
      state.playlists = state.playlists.filter(
        playlist => playlist.id !== action.payload,
      );
    },
    addToPlaylist: (state, action) => {
      const {id, song} = action.payload;
      const playlist = state.playlists.find(p => p.id === id);
      if (playlist) {
        if (playlist.tracks.some(t => t.id === song.id)) {
          playlist.tracks = playlist.tracks.filter(
            track => track.id !== song.id,
          );
        } else {
          playlist.tracks.push(song);
        }
      }
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addToPlaylist,
  addToFavorites,
  removeFromFavorites,
  playTrack,
  pauseTrack,
  resumeTrack,
  stopTrack,
  createPlaylist,
  deletePlaylist,
  nextTrack,
  prviousTrack,
  setCurrentTrack,
  addQuote,
} = musicSlice.actions;
export default musicSlice.reducer;
