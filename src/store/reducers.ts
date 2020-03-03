import {Action, ActionType, ActionWithValue, State} from '../store';
import {switchcase} from '../utilities';

const color = (
  state: State['color'],
  action: Action,
): State['color'] => switchcase(
  action.type,
  {[ActionType.SetColor]: () => (action as ActionWithValue<string>).value},
  state,
);

const showActualTemp = (
  state: State['showActualTemp'],
  action: Action,
): State['showActualTemp'] => switchcase(
  action.type,
  {[ActionType.ToggleShowActualTemp]: () => !state},
  state,
);

export const reducer = (state: State, action: Action): State => ({
  color: color(state.color, action),
  showActualTemp: showActualTemp(state.showActualTemp, action),
});
