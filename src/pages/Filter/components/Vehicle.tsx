import React, { useContext } from 'react';

import { Vehicle as VehicleComponent } from 'components';

import { VehicleContainer, Vehicles, SellContainer, SellButton } from 'pages/Filter/styles';

import FilterContext from '../context';

export default function Vehicle() {
  const { selectedVehicle, setSelectedVehicle } = useContext(FilterContext);

  return (
    <VehicleContainer>
      <Vehicles>
        <VehicleComponent
          type="car"
          name="carros"
          active={selectedVehicle === 'carros'}
          onClick={() => setSelectedVehicle('carros')}
        />
        <VehicleComponent
          type="motor"
          name="motos"
          active={selectedVehicle === 'motos'}
          onClick={() => setSelectedVehicle('motos')}
        />
      </Vehicles>
      <SellContainer>
        <SellButton>
          {selectedVehicle === 'carros' ? (
            <span>Vender meu carro</span>
          ) : (
            <span>Vender minha moto</span>
          )}
        </SellButton>
      </SellContainer>
    </VehicleContainer>
  );
}
