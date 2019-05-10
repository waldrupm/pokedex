import React, { Component } from 'react';
import Pokedex from './Pokedex.js';
import { getCardHand, getHandScore } from './helpers.js';
import pokemon from './pokemon';

export default class Pokegame extends Component {
  render() {
    const handOne = getCardHand(pokemon, 4);
    const handTwo = getCardHand(pokemon, 4);
    const handOneScore = getHandScore(handOne);
    const handTwoScore = getHandScore(handTwo);
    return (
      <div className="game">
        <Pokedex pokeList={handOne} isWinner={ handOneScore >= handTwoScore ? true : false } />
        <Pokedex pokeList={handTwo} isWinner={ handTwoScore >= handOneScore ? true : false } />
      </div>
    )
  }
}
