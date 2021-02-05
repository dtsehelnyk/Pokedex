import React, { useState, useEffect, useContext } from 'react';
import './Card.scss';
import classNames from 'classnames';

import { Context } from '../../context';
import { getData } from '../../api';

export const Card = ({ url, name, index }) => {
  const [ currentAbilities, setAbilities ] = useState([]);
  const [ currentPokemon, setPokemon ] = useState([]);

  const { handleCard } = useContext(Context);

  useEffect(() => {
    const getAbilities = async () => {
      const pokemonFromServer = await getData(url);
  
      setPokemon(pokemonFromServer);
      setAbilities(pokemonFromServer.abilities);
    };

    getAbilities();
  }, [url]);

  return (
    <div
      className="Card"
      onClick={() => handleCard(currentPokemon)}
    >
      <img
        className="Card__image"
        src={`https://pokeres.bastionbot.org/images/pokemon/${index}.png`}
        alt={name}
      />
      <h2 className="Card__title">
        {name}
      </h2>

      <ul className="Card__skills">
        {currentAbilities.map(ability => (
          <li
            key={ability.ability.name}
            className={classNames("Card__skill", {
              "Card__skill--overgrow": ability.ability.name === "overgrow",
              "Card__skill--fire": ability.ability.name === "fire",
              "Card__skill--poison": ability.ability.name === "poison",
              "Card__skill--static": ability.ability.name === "static",
              "Card__skill--grass": ability.ability.name === "grass",
              "Card__skill--electric": ability.ability.name === "electric",
              "Card__skill--shield-dust": ability.ability.name === "shield-dust",
              "Card__skill--stench": ability.ability.name === "stench",
              "Card__skill--drizzle": ability.ability.name === "drizzle",
              "Card__skill--run-away": ability.ability.name === "run-away",
              "Card__skill--sturdy": ability.ability.name === "sturdy",
              "Card__skill--damp": ability.ability.name === "damp",
              "Card__skill--limber": ability.ability.name === "limber",
              "Card__skill--chlorophyll": ability.ability.name === "chlorophyll",
              "Card__skill--blaze": ability.ability.name === "blaze",
              "Card__skill--solar-power": ability.ability.name === "solar-power",
              "Card__skill--torrent": ability.ability.name === "torrent",
              "Card__skill--rain-dish": ability.ability.name === "rain-dish",
              "Card__skill--compound-eyes": ability.ability.name === "compound-eyes",
              "Card__skill--tinted-lens": ability.ability.name === "tinted-lens",
              "Card__skill--shed-skin": ability.ability.name === "shed-skin",
              "Card__skill--swarm": ability.ability.name === "swarm",
              "Card__skill--sniper": ability.ability.name === "sniper",
              "Card__skill--keen-eye": ability.ability.name === "keen-eye",
              "Card__skill--tangled-feet": ability.ability.name === "tangled-feet",
              "Card__skill--big-pecks": ability.ability.name === "big-pecks",
              "Card__skill--guts": ability.ability.name === "guts",
              "Card__skill--hustle": ability.ability.name === "hustle",
              "Card__skill--intimidate": ability.ability.name === "intimidate",
              "Card__skill--unnerve": ability.ability.name === "unnerve",
              "Card__skill--lightning-rod": ability.ability.name === "lightning-rod",
              "Card__skill--sand-rush": ability.ability.name === "sand-rush",
              // ...
            })}
          >
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
