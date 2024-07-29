import { createTheme } from "@mui/material";

export const theme = createTheme({
  colors: {
    text: {
      dark: "#000000",
      grey: "#A0A0A0",
      link: "#006AFF",
    },
  },

  typography: {
    fontFamily: ["Inter"],
    body1: {
      fontStyle: "normal",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    h4: {
      fontStyle: "normal",
      fontSize: "26px",
      fontWeight: 700,
      lineHeight: "40px",
    },

    subtitle2: {
      fontStyle: "normal",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "24px",
    },
  },
});
