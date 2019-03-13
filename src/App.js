import React, { Component } from 'react';
import {ExampleApp} from "./ProjectManagementTriangle/rangesTemplate";

import './ProjectManagementTriangle/range.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <ExampleApp min={0} max={6}/>
      </div>
    );
  }
}



export default App;
