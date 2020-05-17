import React from 'react';

import { BoxFilter, Checkbox, Card, Grid } from 'components';
import Vehicle from './components/Vehicle';
import Actions from './components/Actions';
import FilterLineOne from './components/FilterLineOne';
import FilterLineTwo from './components/FilterLineTwo';
import CardVehicles from './components/CardVehicles';

import useModel from './useModel';

import { FilterContainer, Row } from './styles';

import FilterContext from './context';

export const Filter: React.FC = () => {
  const {
    brands,
    models,
    versions,
    selectedBrand,
    selectedModel,
    selectedVersion,
    resetFilters,
    onSelectBrand,
    onSelectModel,
    onSelectVersion,
    setSelectedVehicle,
    selectedVehicle,
    filteredVehicles,
  } = useModel();

  return (
    <>
      <FilterContext.Provider
        value={{
          setSelectedVehicle,
          selectedVehicle,
          resetFilters,
          brands,
          models,
          selectedBrand,
          onSelectBrand,
          selectedModel,
          onSelectModel,
          versions,
          selectedVersion,
          onSelectVersion,
        }}
      >
        <FilterContainer>
          <Vehicle />
          <BoxFilter>
            <Row>
              <Checkbox label="Novos" />
              <Checkbox label="Usados" />
            </Row>
            <Row>
              <FilterLineOne />
            </Row>
            <Row>
              <FilterLineTwo />
            </Row>
            <Row>
              <Actions />
            </Row>
          </BoxFilter>
        </FilterContainer>
        <Grid>
          {filteredVehicles.map((vehicle: VehicleItem) => (
            <Card key={vehicle.ID}>
              <CardVehicles vehicle={vehicle} />
            </Card>
          ))}
        </Grid>
      </FilterContext.Provider>
    </>
  );
};
