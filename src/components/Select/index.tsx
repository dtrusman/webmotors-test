/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';

import useExternalClick from './useExternalClick';

import { SelectField, SelectToggler, SelectOptions, Searchable, OptionsLabel } from './styles';

import cx from 'classnames';

export const ComboBox = React.forwardRef(
  (
    {
      name,
      options,
      error,
      label,
      placeholder,
      value,
      onSelect,
      className = '',
      style,
      disabled,
      loading = false,
      searchable,
      gender,
    }: ComboboxProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const [filled, setFilled] = useState<boolean>(value !== undefined);
    const [selectedOption, setOption] = useState<ComboboxOption<any> | undefined>(value);
    const [optionsFiltered, setOptionsFiltered] = useState(options);
    const [labelSearch, setLabelSearch] = useState<string>(value ? value.label : '');

    const self: React.RefObject<HTMLInputElement> = useExternalClick(() => setOpen(false), open);

    useEffect(() => {
      if (self.current) {
        const field = self.current.querySelector<HTMLInputElement>(`[name="${name}"]`);
        if (field) {
          field.value = selectedOption ? selectedOption.value : '';
          onSelect && selectedOption && onSelect(selectedOption);
          setLabelSearch(selectedOption?.label || '');
        }
      }
    }, [selectedOption]);

    useEffect(() => {
      setOption(value);
    }, [value]);

    useEffect(() => {
      setOptionsFiltered(options);
    }, [options]);

    useEffect(() => {
      setFilled(labelSearch.length > 0);
    }, [labelSearch]);

    const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
      const regex = new RegExp(`${e.currentTarget.value}`, 'i');
      const filtered = options.filter((item) => regex.test(item.label));
      setOptionsFiltered(filtered);
      setLabelSearch(e.currentTarget.value);
      setOption(undefined);
    };

    return (
      <SelectField
        className={cx({
          '-filled': filled,
          '-error': error !== undefined && error.length,
          '-disabled': disabled,
          '-focus': open,
          [className]: className.length,
        })}
        data-error={error}
        onClick={() => setOpen(!open)}
        style={style}
        ref={self}
      >
        {label && (
          <label>
            {`${label}: `}
            <OptionsLabel className={cx({ '-selected': filled })}>
              {selectedOption?.label ? selectedOption?.label : `Tod${gender}s`}
            </OptionsLabel>
          </label>
        )}
        {placeholder && !selectedOption && <label>{placeholder}</label>}
        {placeholder && selectedOption && <label>{selectedOption.label}</label>}
        <Searchable
          readOnly={!searchable}
          type="text"
          onChange={(e: any) => filterOptions(e)}
          // value={labelSearch}
        />
        <input name={name} type="hidden" ref={ref} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SelectToggler
            onClick={(event) => {
              event.stopPropagation();
              setOpen(!open);
            }}
            className={cx({ '-active': open })}
          />
        )}
        <SelectOptions className={cx({ '-open': open })}>
          {optionsFiltered.map((option) => (
            <li
              key={option.value}
              className={cx({
                '-selected': selectedOption && selectedOption.value === option.value,
              })}
              onClick={() => {
                setOption(option);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </SelectOptions>
      </SelectField>
    );
  },
);
