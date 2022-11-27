import React from 'react';

import ThreeScene from "./components/ThreeScene";
import Info from "./components/Info";

import {Wrapper, GlobalStyle} from "./styles/App.styles";

function App() {
  return (
    <Wrapper className="App">
        <GlobalStyle/>
        <Info/>
        <ThreeScene/>
    </Wrapper>
  );
}

export default App;
