import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 186px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const Description = styled.div`
  box-sizing: border-box;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 8px 12px 12px;

  & > h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    color: #3c3c3c;
  }

  & > h3 {
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }
`;

export const Price = styled.div`
  display: block;
  white-space: nowrap;
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 5px;
  padding: 0px 12px;

  strong {
    color: #3c3c3c;
  }
`;

export const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 10px 0;
`;
