import React from 'react';

const Header = () => {
  return (
    <header className="menu">
      <h2>Logo</h2>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* add toggle for mobile */}
    </header>
  );
};

export default Header;
