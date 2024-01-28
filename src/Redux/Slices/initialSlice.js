import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loginapi = createAsyncThunk('fetchData', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
});

const initialSlice = createSlice({
  name: 'initial',
  initialState: {
    isDark: false,
    isUserLoggedIn: false,
    isConnected: false,
  },
  reducers: {
    setTheme(state) {
      state.isDark = !state.isDark;
    },
    setUser(state) {
      state.isUserLoggedIn = !state.isUserLoggedIn;
    },
    setIsConnected(state, action) {
      state.isConnected = action.payload;
    },
  },
});

export const {setTheme, setUser, setIsConnected} = initialSlice.actions;
export default initialSlice.reducer;
