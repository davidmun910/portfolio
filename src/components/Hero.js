import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <h1>turning ideas into <span class="gradient-text">real life products</span> is my calling.</h1>
      <button onClick={() => document.getElementById('projects').scrollIntoView()}>
        View Projects
      </button>
    </div>
  );
};

export default Hero;