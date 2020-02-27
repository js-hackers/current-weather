/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {Styles} from '../shared-types';
import {useMemo} from 'react';

type Size = 'small' | 'medium' | 'large';
type SizeValue = '1.5' | '2' | '4';

const createStyles = (color: string, size: Size): Styles => {
  const styles: Styles = {};
  styles.base = css`
    font-size: ${((): SizeValue => {
    switch (size) {
      case 'small': return '1.5';
      case 'large': return '4';
      default: return '2';
    }
  })()}rem;
    font-weight: bold;
  `;
  styles.component = css`
    ${styles.base}
    margin: 4rem 1rem;
  `;
  styles.name = css`
    ${styles.base}
    color: ${color};
  `;
  return styles;
};

type Props = {
  color?: string;
  size?: Size;
};

export const Heading: React.FC<Props> = ({
  color = 'blue',
  size = 'medium',
} = {}) => {
  const styles = useMemo(() => createStyles(color, size), [color, size]);

  return (
    <h1 css={styles.component}>Hello <span css={styles.name}>world</span></h1>
  );
};

export default Heading;
