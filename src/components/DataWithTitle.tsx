/** @jsx jsx */
import {css, jsx, SerializedStyles} from '@emotion/core';
import JSONData, {JsonData} from './JSONData';
import {memo} from 'react';

type Props = {
  data: JsonData;
  title: string;
};

export const DataWithTitle: React.FC<Props> = memo(props => {
  const styles: {[key: string]: SerializedStyles} = {};
  styles.component = css`
    margin: 4rem 1rem;
  `;
  styles.title = css`
    margin-bottom: 2rem;
  `;

  return (
    <div css={styles.component}>
      {props.title
        ? <h2 css={styles.title}>{props.title}</h2>
        : null}
      <JSONData data={props.data} />
    </div>
  );
});

export default DataWithTitle;
