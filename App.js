import React, { Component } from "react";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { RightMenu } from "./Components/RightMenu";
import {MainContainer} from "./Components/MainContainer";

class App extends Component {
  render() {
    return (
      <div>
  
   <RightMenu/>
         <LeftMenu/>
   <MainContainer />
   <div className="background"></div> 
      </div>
  
    );
  }
}

export default App;
