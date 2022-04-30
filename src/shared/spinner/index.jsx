import React from 'react';
import './index.css';

export const Spinner = () => {
  return (
    <div class="sk-double-bounce">
      <div class="sk-child sk-double-bounce-1"></div>
      <div class="sk-child sk-double-bounce-2"></div>
    </div>
  );
};
