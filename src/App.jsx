import React from 'react';
import { Router } from 'react-router';
import history from './history';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/routes';

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        newestOnTop
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
      />
    </Router>
  );
}
