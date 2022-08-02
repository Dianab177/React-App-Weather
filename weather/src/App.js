import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import "./Container.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container">
        <div className="border-style">
          <Search />
        </div>
        </div>
        <div class="container">
         <small class="weather-link">
         <a href="https://github.com/Dianab177/React-Weather-App.git" target="_blank" title="link to github"  rel="noopener noreferrer">Open-source code</a>, by <a href="https://www.linkedin.com/in/dianaborrajo/">Diana Borrajo</a> 
         </small>
         </div>
      </div>
    </div>
  );
}

export default App;
