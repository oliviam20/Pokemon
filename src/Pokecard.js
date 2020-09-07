import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = ({
  id,
  name,
  types,
  exp
}) => {
  const splitName = name.split('-');
  const formattedName = splitName.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(' ');
  const typesList = types.map((t, index) => <span key={index}>{t.type.name}</span>);
  return (
    <div className="pokecard">
      <h1 className="pokecard-title">{formattedName}</h1>
      <div className="pokecard-image">
        <img src={`${POKE_API}${padToThree(id)}.png`} alt={formattedName} />
      </div>
      <p className="pokecard-data">Type:{typesList}</p>
      <p className="pokecard-data">EXP: {exp}</p>
    </div>
  )
}

export default Pokecard;
