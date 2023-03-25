import { configureStore } from '@reduxjs/toolkit';
import racun from './racunSLice';

const store = configureStore({
  reducer: {
    racun,
  },
});

export default store;
