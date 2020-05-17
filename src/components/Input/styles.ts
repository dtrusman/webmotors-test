import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (max-width: 600px) {
    width: 77px;
  }

  @media (max-width: 720px) {
    width: 105px;
  }
`;

export const ComboboxContainer = styled.div`
  width: 166px;

  @media (max-width: 600px) {
    width: 110px;
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border: 1px solid #cbd4d4;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
  padding: 0 50px;
  font-size: 16px;

  & > input {
    height: 92%;
    border: none;
    padding: 0 8px;
    font-size: 14px;
    outline: none;
    color: #000;
  }
`;

export const LocationIcon = styled.i`
  position: absolute;
  display: flex;
  height: 40px;
  align-items: center;
  margin-left: 8px;
  color: red;
`;

export const CleanIcon = styled.i`
  position: absolute;
  height: 40px;
  display: flex;
  align-items: center;
  left: 31%;
  cursor: pointer;

  @media (max-width: 600px) {
    left: 53%;
  }
`;
