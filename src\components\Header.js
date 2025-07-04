import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/players">Players</a></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/news">News</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;