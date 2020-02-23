import React from 'react';

type Props = {
  name?: string;
};

export const Greeter: React.FC<Props> = ({name = 'World'}: Props = {}) => (
  <div>Hello {name}</div>
);

export default Greeter;
