export enum ActionType {
  SetColor = 'SetColor',
  ToggleShowActualTemp = 'ToggleShowActualTemp',
}

// export type Action<T = undefined> = T extends undefined
//   ? {type: ActionType}
//   : {
//     type: ActionType;
//     value: T;
//   };

// type ActionValueUndefined = {type: ActionType};
// export type ActionValueString = {
//   type: ActionType;
//   value: string;
// };

// export type Action =
//   | ActionValueString
//   | ActionValueUndefined;

export type Action = {type: ActionType};
export type ActionWithValue<T> = Action & {value: T};

export const setColor = (color: string): ActionWithValue<string> => ({
  type: ActionType.SetColor,
  value: color,
});

export const toggleShowActualTemp =
  (): Action => ({type: ActionType.ToggleShowActualTemp});
