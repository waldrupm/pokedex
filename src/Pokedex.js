import React, { Component } from 'react';
import Pokecard from './Pokecard'

export default class Pokedex extends Component {
  render() {
    const pokeList = this.props.pokeList;
    return (
      <div>
        {pokeList.map((item) => {
         return <Pokecard pokemon={item} />
        })}
      </div>
    )
  }
}
