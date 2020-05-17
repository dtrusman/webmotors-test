import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #ababb0;
`;

export const Content = styled.div`
  background-color: #f3f5f8;
  position: relative;
  top: 50px;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  /* max-height: 312px; */
  padding: 10px;

  @media (max-width: 600px) {
    top: 0;
  }
`;

export const Header = styled.div`
  height: 60px;

  @media (max-width: 720px) {
    padding: 0 10px;
  }
`;

export const Image = styled.img``;

export const Body = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
`;
