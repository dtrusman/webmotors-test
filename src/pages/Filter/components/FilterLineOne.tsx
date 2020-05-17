import React, { useContext } from 'react';

import { Input, ComboBox } from 'components';
import { grid } from 'utils/grid';

import FilterContext from '../context';

export default function FilterLineOne() {
  const { brands, models, selectedBrand, onSelectBrand, selectedModel, onSelectModel } = useContext(
    FilterContext,
  );
  return (
    <>
      <Input />
      <ComboBox
        className={grid(4, 3, 3)}
        name="brand"
        options={brands}
        label="Marca"
        value={selectedBrand}
        onSelect={onSelectBrand}
        gender="a"
      />
      <ComboBox
        className={grid(4, 3, 3)}
        name="model"
        options={models}
        label="Modelo"
        value={selectedModel}
        onSelect={onSelectModel}
        gender="o"
      />
    </>
  );
}
