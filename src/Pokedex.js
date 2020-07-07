import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = ({
  pokemon,
  exp,
  isWinner
}) => {
  let title = <h1 className="pokedex-loser">Losing Hand</h1>;
  if (isWinner) {
    title = <h1 className="pokedex-winner">Winning Hand</h1>;
  }
  return (
    <div className="pokedex">
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className="pokedex-cards">
        {pokemon.map((p, idx) => (
          <Pokecard
            key={idx}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default Pokedex;
