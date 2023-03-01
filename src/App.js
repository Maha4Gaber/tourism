import './App.css';
import Header from './features/Header/Header';
import Footer from './features/Footer/Footer';

import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './features/Home/Home';
import Fav from './features/Fave/Fav';
import Search from './features/Search/Search';
import * as React from 'react';
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

import { createTheme,ThemeProvider }  from '@mui/material/styles'

import { Box } from '@mui/material';

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#fffbeb",
            },
            divider: "#fde68a",
            background: {
              default: "#FFF",
              paper: "#f2ede2",
              red: "#680000e6",
            },
            text: {
              primary: "#000",
              secondary: "#27272a",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#dbf4ff",
            },
            divider: "#004282",
            background: {
              default: "#080808",
              paper: "#010102",
              red: "#010102",
            },
            text: {
              primary: "#fff",
              secondary: "#71717a",
            },
          }),
    },
  });


function App() {
    const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      
      <BrowserRouter>      
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Fav' element={<Fav />} />
            <Route path='/search' element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </ThemeProvider>


  );
}

export default App;
