import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import styled from 'styled-components';

const Header = styled.h1`
  color: #443e3e;
  font-family: 'Press Start 2P', cursive;
  text-shadow: 1px 1px 5px #fff;
`;

const App = () => {

  return (
    <div className="App">
      <Header>React Wars</Header>
      <CharacterList />
    </div>
  );
}

export default App;
