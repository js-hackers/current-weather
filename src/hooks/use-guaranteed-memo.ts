import {useEffect, useRef} from 'react';

const usePrevious = <T>(value: T): T => {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

type Dependencies = ReadonlyArray<any>; // eslint-disable-line @typescript-eslint/no-explicit-any, max-len

export const useGuaranteedMemo = <T>(
  factory: (...dependencies: Dependencies) => T,
  dependencies: Dependencies,
): T => {
  const result = useRef<T>(factory(...dependencies));
  const dPrevious = usePrevious(dependencies);

  let areEqual = dependencies.length === dPrevious.length;

  for (let i = 0; i < dependencies.length && areEqual; i += 1) {
    areEqual = Object.is(dependencies[i], dPrevious[i]);
  }

  if (!areEqual) result.current = factory(...dependencies);

  return result.current;
};
