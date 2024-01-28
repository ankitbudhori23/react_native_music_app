import {combineReducers} from '@reduxjs/toolkit';
import initialReducer from './Slices/initialSlice';
import DataReducer from './Slices/DataSlice';

const RootReducer = combineReducers({
  initial: initialReducer,
  data: DataReducer,
});

export default RootReducer;
