import React from 'react';
import './index.css';

export const SpinnerFull = () => {
  return (
    <section
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div class="sk-double-bounce">
        <div class="sk-child sk-double-bounce-1"></div>
        <div class="sk-child sk-double-bounce-2"></div>
      </div>
    </section>
  );
};
