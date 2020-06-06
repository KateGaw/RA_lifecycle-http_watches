import React from "react";
import "./App.css";

import Watches from './components/Watches';

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Watches />
      </div>{" "}
    </div>
  );
}

export default App;
