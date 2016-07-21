import App from './components/App';
import Polkamon from './components/Polkamon';
import Home from './components/Home';
import Faq from './components/Faq';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="polkamon" component={Polkamon} />
      <Route path="faq" component={Faq} />
    </Route>
  </Router>
  , document.getElementById('root'));
