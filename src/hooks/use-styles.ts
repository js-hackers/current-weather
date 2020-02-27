import {css, keyframes} from '@emotion/core';
import {useMemo} from 'react';

// export type Styles = {[key: string]: SerializedStyles};
export type Styles = {
  [key: string]:
    | ReturnType<typeof css>
    | ReturnType<typeof keyframes>;
};

type Dependencies = any[]; // eslint-disable-line @typescript-eslint/no-explicit-any, max-len
export type CreateStyles = (...dependencies: Dependencies) => Styles;

export const useStyles =
  (createStyles: CreateStyles, dependencies?: Dependencies): Styles => useMemo(
    () => createStyles(...(
      dependencies !== undefined
      && dependencies.length > 0
    )
      ? dependencies
      : []),
    [
      createStyles,
      ...(
        dependencies !== undefined
        && dependencies.length > 0
      )
        ? dependencies
        : [],
    ],
  );
