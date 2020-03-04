export enum ActionType {
  SetColor = 'SetColor',
  ToggleShowActualTemp = 'ToggleShowActualTemp',
}

export type Action = {type: ActionType};
export type ActionWithValue<T> = Action & {value: T};

export const setColor = (color: string): ActionWithValue<string> => ({
  type: ActionType.SetColor,
  value: color,
});

export const toggleShowActualTemp =
  (): Action => ({type: ActionType.ToggleShowActualTemp});
