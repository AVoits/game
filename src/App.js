import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Title>Hello</Title>
        </header>
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default App;
