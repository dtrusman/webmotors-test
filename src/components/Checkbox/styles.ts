import styled from 'styled-components';

import { FaCheck } from 'react-icons/fa';
import { GiSquare } from 'react-icons/gi';

export const CheckboxControl = styled(GiSquare)`
  width: 22px;
  height: 22px;
  z-index: 1;
  pointer-events: none;
`;

export const CheckboxControlChecked = styled(FaCheck)`
  width: 22px;
  height: 12px;
  z-index: 2;
  transition: transform 100ms var(--easing-standard);
  transform-origin: center;
  transform: scale(0);
  pointer-events: none;
  color: #c92a34;
`;

export const CheckboxField = styled.label`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: var(--color-primary);

  & > [type='checkbox'] {
    position: relative;
    width: 24px;
    height: 24px;
    opacity: 0;
    cursor: pointer;

    & ~ ${CheckboxControl} {
      position: absolute;
      left: 0;
    }

    & ~ ${CheckboxControlChecked} {
      position: absolute;
      left: 0;
    }

    &:checked ~ ${CheckboxControlChecked} {
      transform: scale(1);
    }
  }

  & > .label {
    position: relative;
    /* margin-left: 10px;
    margin-inline-start: 10px; */
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    cursor: pointer;
  }
`;
