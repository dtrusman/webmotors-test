import React, { useContext } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { Row, AdvancedSearch, CleanFilter, Offers } from '../styles';
import { grid } from 'utils/grid';

import FilterContext from '../context';

export default function Actions() {
  const { resetFilters } = useContext(FilterContext);

  return (
    <div className={grid(12)}>
      <Row>
        <AdvancedSearch className={grid(6)}>
          <a>
            <MdKeyboardArrowRight size={15} /> Busca Avançada
          </a>
        </AdvancedSearch>

        <CleanFilter className={grid(2)}>
          <a onClick={() => resetFilters()}>Limpar filtros</a>
        </CleanFilter>

        <Offers className={grid(4)}>Ver Ofertas</Offers>
      </Row>
    </div>
  );
}
