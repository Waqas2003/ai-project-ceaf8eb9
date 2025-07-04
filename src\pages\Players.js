import React from 'react';
import players from '../data/players';

function Players() {
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <img src={player.image} alt={player.name} />
            <h2>{player.name}</h2>
            <p>{player.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;