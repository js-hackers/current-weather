import * as serviceWorker from './serviceWorker';
import {initialState, reducer} from './store';
import App from './components/App';
import GlobalStyles from './styles-global';
import React from 'react';
import {render} from 'react-dom';
import {StateContextProvider} from './hooks';

render(
  (
    <StateContextProvider reducer={reducer} initialValue={initialState}>
      <GlobalStyles />
      <App />
    </StateContextProvider>
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
