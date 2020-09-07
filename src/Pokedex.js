import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = ({
  pokemon,
  exp,
  isWinner
}) => {
  let title = <h1 className="pokedex-loser">Better luck next time!</h1>;
  if (!pokemon.length) {
    title = <h1>Loading</h1>;
  } else if (isWinner) {
    title = <h1 className="pokedex-winner">Winner Winner Chicken Dinner!!</h1>;
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
            types={p.types}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

Pokedex.defaultProps = {
  pokemon: []
}

export default Pokedex;
