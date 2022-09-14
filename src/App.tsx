import React from "react";
import "./App.css";
import { Application } from "./components/application/application";
import MuiMode from "./mui/mui-mode";
import AppProviders from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
