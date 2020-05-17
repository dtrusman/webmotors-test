import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 265px;
  min-height: 420px;
  margin-top: 10px;

  @media (max-width: 600px) {
    margin-top: 0;
    padding: 10px;
    width: 97%;
  }
`;

export const CardContainer = styled.div`
  box-shadow: rgba(158, 184, 209, 0.41) 0px 2px 9px 0px;
  background-color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  width: inherit;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 10px;
`;
