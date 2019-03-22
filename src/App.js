import React, { Component } from "react";
import AppNavbar from './components/AppNavbar';
import './App.css';
import AppNav from './components/AppNav';
import ApplyNow from './components/ApplyNow';


class App extends Component {
  render() {
    return (
      
        <div className="homeBackground">
          {/* <AppNavbar /> */}
          <AppNav />
        </div>
      

    );
  }
}

export default App;

