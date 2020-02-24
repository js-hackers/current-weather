import * as serviceWorker from './serviceWorker';
import React, {Fragment} from 'react';
import App from './components/App';
import GlobalStyles from './styles-global';
import {render} from 'react-dom';

render(
  (
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
