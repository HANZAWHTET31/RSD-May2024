import { useState, useMemo, createContext } from "react";

import { ThemeProvider, createTheme, CssBaseline} from "@mui/material";

import App from "./App";

export const AppContext = createContext();

export default function ThemedApp(){
      const [mode, setMode] = useState("dark");

      const theme = useMemo(() => {
            return createTheme({palette: {mode}});
      }, [mode]);

      return (
            <ThemeProvider theme={theme}>
                  <AppContext.Provider value={{mode, setMode}}>
                        <App />
                        <CssBaseline />
                  </AppContext.Provider>
            </ThemeProvider>
      )
}