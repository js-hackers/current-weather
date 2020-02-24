/** @jsx jsx */
import {css, jsx, SerializedStyles} from '@emotion/core';
import {memo} from 'react';

export type JsonPrimitive = boolean | null | number | string;
export type JsonArray = Array<JsonData>;
export type JsonObject = { [prop: string]: JsonData };
export type JsonData = JsonArray | JsonObject | JsonPrimitive;

type Props = {data: JsonData};

export const JSONData: React.FC<Props> = memo(props => {
  const styles: {[key: string]: SerializedStyles} = {};
  styles.component = css`
    background-color: hsla(0, 0%, 50%, 0.15);
    border-radius: 0.25em;
    overflow: auto;
    padding: 1rem;
  `;

  const stringifyIndent = 2;

  return (
    <pre css={styles.component}>
      <code>{JSON.stringify(props.data, null, stringifyIndent)}</code>
    </pre>
  );
});

export default JSONData;
