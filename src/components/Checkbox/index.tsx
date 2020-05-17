/* eslint-disable react/display-name */
import React from 'react';
import { CheckboxField, CheckboxControl, CheckboxControlChecked } from './styles';

export const Checkbox = React.forwardRef(
  (
    { label, name, checked, value, className, style, onChange }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <CheckboxField className={className} style={style} htmlFor={`${name}_${value}`}>
        <input
          type="checkbox"
          id={`${name}_${value}`}
          name={name}
          value={value}
          ref={ref}
          onChange={onChange}
          defaultChecked={checked}
        />
        <CheckboxControl />
        <CheckboxControlChecked />
        <span className="label">{label}</span>
      </CheckboxField>
    );
  },
);
