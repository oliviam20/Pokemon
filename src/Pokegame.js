import React from 'react';
import Pokedex from './Pokedex';

const Pokegame = ({ pokemon }) => {
  const handOne = [];
  const handTwo = [...pokemon];
  while (handOne.length < handTwo.length) {
    const randIdx = Math.floor(Math.random() * handTwo.length);
    const randPokemon = handTwo.splice(randIdx, 1)[0];
    handOne.push(randPokemon);
  }

  const expOne = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  const expTwo = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <>
      <Pokedex
        pokemon={handOne}
        exp={expOne}
        isWinner={expOne > expTwo}
      />
      <Pokedex
        pokemon={handTwo}
        exp={expTwo}
        isWinner={expOne < expTwo}
      />
    </>
  )
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
}

export default Pokegame;
