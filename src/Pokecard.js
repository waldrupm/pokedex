import React, { Component } from 'react';
import { padId } from './helpers.js';
import './Pokecard.css';

export default class Pokecard extends Component {
  render() {
    const {id, name, type, base_experience} = this.props.pokemon;
    let paddedId = padId(id);
    let cardClass = "";
    if (this.props.isWinner) {
      cardClass = "pokeCard winner";
    } else {
      cardClass = "pokeCard loser";
    }
    return (
      <div className="pokeContainer">
        <div className={cardClass}>
          <h3>{name}</h3>
          <img height={150} width={150} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`} alt={name} />
          <p>Type: {type}</p>
          <p>Exp: {base_experience}</p>
        </div>
      </div>
    )
  }
}
