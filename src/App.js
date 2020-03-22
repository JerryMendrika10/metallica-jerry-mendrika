import React, { Component } from 'react';
import './App.css';
import "./assets/css/styles.css";
import MainAppClient from "./components/main/MainAppClient"
import { BrowserRouter as Router,withRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Router>
      <div className="App" >
        
          <MainAppClient
          />
        
      </div>
      </Router>
    );
  }
}

export default App;
