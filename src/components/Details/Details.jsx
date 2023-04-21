import React from 'react';
import './Details.scss';

export const Details = ({ activeCard }) => {

  return (
    <aside className="Details">
      {!activeCard
        ? <span className="Details__question">?</span>
        : <>
            <img
              className="Details__image"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${activeCard.id}.svg`}
              alt={activeCard.name}
            />

            <h2 className="Details__title">
              {activeCard.name}
              {' #' + `${activeCard.id}`.padStart(3, '0')}
            </h2>

            <ul className="Details__list">
              <li className="Details__stat Details__stat--type">
                <span>Type </span>
                <ul className="Details__inner-list">
                  {activeCard.types.map(type => (
                    <li key={type.slot}>
                      {type.type.name}
                    </li>
                  ))}
                </ul>
              </li>

              <li className="Details__stat Details__stat--attack">
                <span>Attack </span>
                <span>{activeCard.stats[1].base_stat}</span>
              </li>

              <li className="Details__stat Details__stat--defense">
                <span>Defense </span>
                <span>{activeCard.stats[2].base_stat}</span>
              </li>

              <li className="Details__stat Details__stat--hp">
                <span>HP </span>
                <span>{activeCard.stats[0].base_stat}</span>
              </li>

              <li className="Details__stat Details__stat--sp-attack">
                <span>SP Attack </span>
                <span>{activeCard.stats[3].base_stat}</span>
              </li>

              <li className="Details__stat Details__stat--sp-defense">
                <span>SP Defense </span>
                <span>{activeCard.stats[4].base_stat}</span>
              </li>

              <li className="Details__stat Details__stat--speed">
                <span>Speed </span>
                <span>{activeCard.stats[5].base_stat}</span>
              </li>

              <li className="Details__stat Details__stat--weight">
                <span>Weight </span>
                <span>{activeCard.weight}</span>
              </li>

              <li className="Details__stat Details__stat--moves">
                <span>Total moves </span>
                <span>{activeCard.moves.length}</span>
              </li>
            </ul>
          </>
      }
    </aside>
  )
}
