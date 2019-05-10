import React from 'react';
import logo from './logo.svg';
import './App.css';
import pokemon from './pokemon';
import Pokedex from './Pokedex';

function App() {
  return (
    <Pokedex pokeList={pokemon}/>
  );
}

export default App;
