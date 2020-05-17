import React from 'react';

import { Box } from './styles';

interface Props {
  children?: React.ReactNode;
}

export const BoxFilter: React.FC = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
