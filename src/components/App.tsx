/** @jsx jsx */
import {E} from '../types';
import {jsx} from '@emotion/core';
import {setColor} from '../store';
import {useEffect} from 'react';
import {useStateContext} from '../hooks';

export const App = (): E => {
  const [state, dispatch] = useStateContext();
  useEffect(() => {
    dispatch(setColor('#ff0000'));
  }, [dispatch]);
  return <div>{state.color}</div>;
};

export default App;
