import React from 'react';
import { FaCarSide, FaMotorcycle } from 'react-icons/fa';
import cx from 'classnames';

import { Container, Icon, IconContainer, Text, Span } from './styles';

interface Props {
  type: 'car' | 'motor';
  name: string;
  active?: boolean;
  onClick?: React.MouseEventHandler;
}

export const Vehicle: React.FC<Props> = ({ type, name, active, onClick }: Props) => {
  const activeClassname = cx({
    '-active': active,
  });

  return (
    <Container className={activeClassname} onClick={onClick}>
      <IconContainer>
        <Icon className={activeClassname}>
          {type === 'car' && <FaCarSide size={25} />}
          {type === 'motor' && <FaMotorcycle size={25} />}
        </Icon>
      </IconContainer>
      <Text>
        <Span>comprar</Span>
        <Span className={activeClassname}>{name}</Span>
      </Text>
    </Container>
  );
};
