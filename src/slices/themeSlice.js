import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: !!JSON.parse(localStorage.getItem("darkMode")),
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme (state,action) {
      state.darkMode = !state.darkMode;
      const isDarkMode = !!JSON.parse(localStorage.getItem("darkMode"));
      localStorage.setItem("darkMode", !isDarkMode);
    },
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;