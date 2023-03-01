import { useSelector, useDispatch } from "react-redux";

import { Typography, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { toggleTheme } from '../../slices/themeSlice';

export default function Theme() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const theme = useTheme();
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.poper",
          color: "text.primary",
        }}
      >
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleTheme())}
          // color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </div>
  )
}
