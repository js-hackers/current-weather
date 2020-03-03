import {Action, State} from '../store';
import {createContext, createElement, useContext, useReducer} from 'react';
import {E} from '../types';

const StateContext =
  createContext<[State, React.Dispatch<Action>] | null>(null);

export const StateContextProvider = ({
  reducer,
  initialValue,
  init = (): State => initialValue,
  children,
}: {
  reducer: React.Reducer<State, Action>;
  initialValue: State;
  init: () => State;
  children: React.ReactChildren;
}): E => createElement(
  StateContext.Provider,
  {value: useReducer(reducer, initialValue, init)},
  children,
);

export const useStateContext = (): [
  State,
  React.Dispatch<Action>,
] => useContext(StateContext) as [State, React.Dispatch<Action>];
