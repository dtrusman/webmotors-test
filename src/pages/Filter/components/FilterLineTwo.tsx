import React, { useContext } from 'react';

import { ComboBox } from 'components';
import { grid } from 'utils/grid';

import FilterContext from '../context';

import { yearsOptions, pricesOptions } from '../constants';

export default function FilterLineTwo() {
  const { versions, selectedVersion, onSelectVersion } = useContext(FilterContext);
  return (
    <>
      <ComboBox
        className={grid(4, 3)}
        name="year"
        options={yearsOptions}
        placeholder="Ano Desejado"
      />
      <ComboBox
        className={grid(4, 3)}
        name="price"
        options={pricesOptions}
        placeholder="Faixa de Preço"
      />
      <ComboBox
        className={grid(6)}
        name="version"
        options={versions}
        label="Versão"
        value={selectedVersion}
        onSelect={onSelectVersion}
        gender="a"
      />
    </>
  );
}
