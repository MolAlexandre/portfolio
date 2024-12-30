import React from 'react';
import './AnimatedArrowButton.css';

const AnimatedArrowButton = ({ name }) => {
  return (
      <div className="animated-arrow-button">
        <a href="#" className="animated-arrow">
          <span className="main">
            <span className="text text-xl font-medium">{name}</span>
            <span className="the-arrow -right">
              <span className="shaft"></span>
            </span>
          </span>
          <span className="the-arrow -left">
            <span className="shaft"></span>
          </span>
        </a>
      </div>
  );
};

export default AnimatedArrowButton;