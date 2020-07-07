import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = ({
  id,
  name,
  type,
  exp
}) => {
  return (
    <div className="pokecard">
      <h1 className="pokecard-title">{name}</h1>
      <div className="pokecard-image">
        <img src={`${POKE_API}${padToThree(id)}.png`} alt={name} />
      </div>
        <div className="pokecard-data">Type: {type}</div>
        <div className="pokecard-data">EXP: {exp}</div>
    </div>
  )
}

export default Pokecard;
