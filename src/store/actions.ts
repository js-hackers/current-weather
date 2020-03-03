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

type ActionValueUndefined = {type: ActionType};
export type ActionValueString = {
  type: ActionType;
  value: string;
};

export type Action =
  | ActionValueString
  | ActionValueUndefined;

export const setColor = (color: string): ActionValueString => ({
  type: ActionType.SetColor,
  value: color,
});

export const toggleShowActualTemp =
  (): ActionValueUndefined => ({type: ActionType.ToggleShowActualTemp});
