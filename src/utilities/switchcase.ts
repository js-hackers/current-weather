type Case<T> = T | (() => T);
type Cases<T> = {[key: string]: Case<T>};

export const switchcase = <T>(
  value: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  cases: Cases<T>,
  defaultCase?: Case<T>,
): T => {
  const valueString = String(value);
  const result = valueString in cases
    ? cases[valueString]
    : defaultCase;
  return typeof result === 'function' ? (result as Function)() : result;
};
