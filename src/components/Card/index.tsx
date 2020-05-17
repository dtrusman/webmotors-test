import React from 'react';

import { Container, CardContainer } from './styles';
import { grid } from 'utils/grid';

interface Props {
  children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children }: Props) => {
  return (
    <Container className={grid(4, 3, 3)}>
      <CardContainer>{children}</CardContainer>
    </Container>
  );
};
