import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, system-ui, Arial, sans-serif",
    h1: { fontFamily: "Anta, Lato, sans-serif" },
    h2: { fontFamily: "Anta, Lato, sans-serif" },
    h3: { fontFamily: "Anta, Lato, sans-serif" },
    h4: { fontFamily: "Anta, Lato, sans-serif" },
    h5: { fontFamily: "Anta, Lato, sans-serif" },
    h6: { fontFamily: "Anta, Lato, sans-serif" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
