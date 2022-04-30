/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from 'src/pages/home';
import { UserPage } from 'src/pages/user';
import { Spinner } from 'src/shared/spinner';
import { HOME, USER } from './constants';

export default function Routes() {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME} component={HomePage} />
          <Route exact path={`${USER}/:id`} component={UserPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
