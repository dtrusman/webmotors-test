import styled from 'styled-components';

import { MdArrowDropDown } from 'react-icons/md';

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 40px;
  border: 2px solid var(--color-grey-dark);
  border-radius: 4px;
  background-color: white;
  transition-property: border;
  transition-duration: 150ms;
  transition-timing-function: var(--easing-standard);
  border: 1px solid #cbd4d4;

  & > label {
    position: absolute;
    top: 50%;
    left: 5px;
    margin-top: -0.5em;
    line-height: 1em;
    font-size: 14px;
    color: var(--color-grey-dark);
    border-left: 4px solid white;
    border-right: 4px solid white;
    background-color: white;
    transition-property: color, top, font-size;
    transition-duration: 150ms;
    transition-timing-function: var(--easing-decelerate);
    pointer-events: none;
  }

  &.-focus {
    border-color: #3c3c3c;

    > label {
      transition-timing-function: var(--easing-accelerate);
      /* top: 0; */
      color: #3c3c3c;
      font-size: 16px;
    }
  }

  /* &.-filled > label {
    transition-timing-function: var(--easing-accelerate);
    top: 0;
    color: var(--color-primary);
    font-size: 12px;
  } */

  &.-error {
    border-color: var(--color-error);
    margin-bottom: 28px;

    &::after {
      content: attr(data-error);
      position: absolute;
      top: 100%;
      left: 16px;
      margin: 8px 0;
      font-size: 12px;
      line-height: 1em;
    }
  }

  &:not(.-error).-disabled {
    border-color: var(--color-grey-medium);
  }

  &.-disabled {
    opacity: 0.4;
  }
`;

export const SelectField = styled(FormField)`
  cursor: pointer;

  &.-disabled {
    pointer-events: none;
  }
`;

export const SelectToggler = styled(MdArrowDropDown)`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 4px;
  color: #3c3c3c;
  transition: transform 150ms var(--easing-standard);
  cursor: pointer;

  &.-active {
    transform: rotate(180deg);
  }
`;

export const SelectOptions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: 0;
  margin: 0;
  list-style: none;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  border-radius: 4px;
  border: 1px solid #9f9f9f;
  background-color: white;
  box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.16);
  opacity: 0;
  transform: translateY(-56px);
  transition-property: opacity, margin, padding, transform, max-height;
  transition-duration: 75ms, 150ms;
  transition-timing-function: var(--easing-accelerate);
  z-index: 4;

  & > li {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    align-items: center;
    width: 100%;
    min-height: 30px;
    padding: 0 8px;
    font-size: 18px;
    cursor: pointer;
    height: auto;

    &:hover {
      background-color: #f3f3f3;
    }

    &.-selected {
      background-color: #c92a34;
      color: #fff;
    }
  }

  &.-open {
    transition-timing-function: var(--easing-decelerate);
    min-height: 180px;
    /* padding: 8px 0; */
    /* margin: 0px 0; */
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputField = styled.input`
  display: flex;
  flex: auto;
  max-width: 100%;
  max-height: 56px;
  /* padding: 0 16px; */
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: var(--color-primary);
  border: none;
  background-color: transparent;
`;

export const Searchable = styled(InputField)`
  max-width: calc(100% - 40px);
  height: 100%;
  padding: 0 0 0 8px;

  &:read-only {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export const OptionsLabel = styled.label`
  font-weight: bold;

  &.-selected {
    color: #3c3c3c;
  }
`;
