import React, { Component } from 'react'

export default class Pokecard extends Component {
  render() {
    const {id, name, type, base_experience} = this.props.pokemon;
    return (
      <div>
        <h3>{name}</h3>
        <image height={200} width={200} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <p>Type: {type}</p>
        <p>Exp: {base_experience}</p>
      </div>
    )
  }
}
