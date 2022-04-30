/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from 'src/pages/home';
import { HOME } from './constants';

export default function Routes() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

