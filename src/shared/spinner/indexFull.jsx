import React from 'react';
import './index.css';

export const SpinnerFull = () => {
  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="sk-double-bounce">
        <div className="sk-child sk-double-bounce-1"></div>
        <div className="sk-child sk-double-bounce-2"></div>
      </div>
    </section>
  );
};
