import {createElement as e} from 'react';

type Props = {
  name?: string;
};

export const Greeter: React.FC<Props> = ({name = 'World'}: Props = {}) => e(
  'div',
  null,
  `Hello ${name}`,
);

export default Greeter;
