import React, { Component } from 'react';
import styled from 'styled-components';
import {ExampleApp} from "./ProjectManagementTriangle/rangesTemplate";

import './ProjectManagementTriangle/range.css'

class App extends Component {
  render() {
    return (
      <Root className="App">
          <ExampleApp min={1} max={10}/>
      </Root>
    );
  }
}

const Root = styled.div`
    * {
        box-sizing: border-box;
    }
`;


export default App;
