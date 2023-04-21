import React, { useState } from 'react';
import './App.scss';

import { Context } from './context';
import { Cards } from './components/Cards/Cards';
import { Details } from './components/Details/Details';

export const App = () => {
  const [ activeCard, setCard ] = useState('');

  const handleCard = (card) => {
    setCard(card);
  }

  return (
    <Context.Provider value={{ handleCard }}>
      <div className="App">
        <h1 className="App__title">Pokedex</h1>

        <main className="App__main">
          <Cards />
          <Details activeCard={activeCard} />
        </main>
      </div>
    </Context.Provider>
  );
}
