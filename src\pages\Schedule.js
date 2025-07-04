import React from 'react';
import schedule from '../data/schedule';

function Schedule() {
  return (
    <div>
      <h1>Schedule</h1>
      <ul>
        {schedule.map((match) => (
          <li key={match.id}>
            <h2>{match.date}</h2>
            <p>{match.opponent}</p>
            <p>{match.venue}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;