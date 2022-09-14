import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Add any other providers, such as the Redux provider, as wrappers
// around {children}.

const AppProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default AppProviders;
