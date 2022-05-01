import React from 'react';
import './index.css';

export const Spinner = () => {
  return (
    <div className="sk-double-bounce">
      <div className="sk-child sk-double-bounce-1"></div>
      <div className="sk-child sk-double-bounce-2"></div>
    </div>
  );
};
