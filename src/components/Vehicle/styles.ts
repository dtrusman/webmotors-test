import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 160px;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #cbd4d4;

  &.-active {
    border-bottom: 2px solid #c92a34;
  }
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const Icon = styled.i`
  display: flex;
  margin: 0 15px;

  &.-active {
    color: #c92a34;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 22px;
  text-transform: uppercase;

  &:first-child {
    font-size: 12px;
  }

  &.-active {
    color: #c92a34;
  }
`;
