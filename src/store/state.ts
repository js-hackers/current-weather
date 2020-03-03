export type State = {
  color: string;
  showActualTemp: boolean;
};

const newState = (): State => ({
  color: '#000000',
  showActualTemp: false,
});

export const initialState = newState();
