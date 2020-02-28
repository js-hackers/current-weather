import {css, keyframes} from '@emotion/core';
export {useGuaranteedMemo as useMemoizedStyles} from './use-guaranteed-memo';

export type Styles = {
  [key: string]:
    | ReturnType<typeof css>
    | ReturnType<typeof keyframes>;
};
