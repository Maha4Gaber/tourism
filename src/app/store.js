import { configureStore } from '@reduxjs/toolkit';
import Fav from '../slices/FavSlice';
import   ThemeSlice  from '../slices/themeSlice';

export const store = configureStore({
  reducer: {
    fav: Fav,
    theme: ThemeSlice,
  },
});
