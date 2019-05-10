import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

export default class Pokedex extends Component {
  render() {
    const pokeList = this.props.pokeList;
    
    return (
      <div className="Pokedex">
        {pokeList.map((item, index) => {
         return <Pokecard pokemon={item} key={index} isWinner={this.props.isWinner}/>
        })}
      </div>
    )
  }
}
