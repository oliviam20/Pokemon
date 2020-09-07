import React, { useState, useEffect } from 'react';
import { fetchPokemon } from './fetchPokemon';
import Pokedex from './Pokedex';

const Pokegame = () => {
  const [pokemon, setPokemon] = useState([]);
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});

  useEffect(() => {
    let ids = [];
    while (ids.length < 8) {
      const id = Math.floor(Math.random() * Math.floor(893)) + 1;
      if (!ids.includes(id)) ids.push(id);
    }

    Promise.all(ids.map(id => fetchPokemon(id)))
      .then(res => setPokemon([...res]))
  }, [])

  useEffect(() => {
    const handOne = [];
    const handTwo = [...pokemon];
    while (handOne.length < handTwo.length) {
      const randIdx = Math.floor(Math.random() * handTwo.length);
      const randPokemon = handTwo.splice(randIdx, 1)[0];
      handOne.push(randPokemon);
    }

    const expOne = handOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    const expTwo = handTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    setPlayerOne({
      pokemon: [...handOne],
      exp: expOne
    });
    setPlayerTwo({
      pokemon: [...handTwo],
      exp: expTwo
    })
  }, [pokemon])

  return (
    <>
      <Pokedex
        pokemon={playerOne.pokemon}
        exp={playerOne.exp}
        isWinner={playerOne.exp > playerTwo.exp}
      />
      <Pokedex
        pokemon={playerTwo.pokemon}
        exp={playerTwo.exp}
        isWinner={playerOne.exp < playerTwo.exp}
      />
    </>
  )
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', types: [{type: 'fire'}], base_experience: 62 },
    { id: 7, name: 'Squirtle', types: [{type: 'water'}], base_experience: 63 },
    { id: 11, name: 'Metapod', types: [{type: 'bug'}], base_experience: 72 },
    { id: 12, name: 'Butterfree', types: [{type: 'flying'}], base_experience: 178 },
    { id: 25, name: 'Pikachu', types: [{type: 'electric'}], base_experience: 112 },
    { id: 39, name: 'Jigglypuff', types: [{type: 'normal'}], base_experience: 95 },
    { id: 94, name: 'Gengar', types: [{type: 'poison'}], base_experience: 225 },
    { id: 133, name: 'Eevee', types: [{type: 'normal'}], base_experience: 65 }
  ]
}

export default Pokegame;
