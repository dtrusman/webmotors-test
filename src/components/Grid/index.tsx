import styled from 'styled-components';

export const Grid = styled.div<GridProps>`
  display: grid;
  width: 100%;
  margin: 10px 0;
  grid-template-rows: ${(props) => (props.rows ? `repeat(${props.rows}, 1fr)` : 'auto')};

  @media screen and (max-width: 599px) {
    gap: ${(props) => `${props.gap || 16}px`};
    grid-template-columns: ${(props) => `repeat(${props.columns || 4}, 1fr)`};
  }

  @media screen and (min-width: 600px) and (max-width: 719px) {
    gap: ${(props) => `${props.gap || 16}px`};
    grid-template-columns: ${(props) => `repeat(${props.columns || 8}, 1fr)`};
  }

  @media screen and (min-width: 720px) and (max-width: 839px) {
    gap: ${(props) => `${props.gap || 24}px`};
    grid-template-columns: ${(props) => `repeat(${props.columns || 8}, 1fr)`};
  }

  @media screen and (min-width: 840px) {
    gap: ${(props) => `${props.gap || 24}px`};
    grid-template-columns: ${(props) => `repeat(${props.columns || 12}, 1fr)`};
  }
`;
