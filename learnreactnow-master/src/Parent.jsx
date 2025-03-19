import React from "react";
import { ContextTheme } from "./CreateContext.jsx";
    
const ThemeProvider = ({children}) => {

      // Step 3: Define the state that we want to share
const theme = "Atlantis";
  // Function to toggle theme



    return(
        <ContextTheme.Provider value={theme}>
        {children}
        </ContextTheme.Provider>
    )
}
export default ThemeProvider;