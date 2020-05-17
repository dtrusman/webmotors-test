import React from 'react';

import {
  ImageContainer,
  Image,
  InfoContainer,
  Description,
  Price,
  MoreInfoContainer,
} from './styles';

interface Props {
  vehicle: VehicleItem;
}

export default function CardVehicles({ vehicle }: Props) {
  return (
    <>
      <ImageContainer>
        <Image src={vehicle.Image} alt={vehicle.Make} />
      </ImageContainer>
      <InfoContainer>
        <Description>
          <h2>{`${vehicle.Make} ${vehicle.Model}`}</h2>
          <h3>{vehicle.Version}</h3>
        </Description>
        <Price>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumSignificantDigits: 3,
            }).format(Number(vehicle.Price.replace(',', '.')))}
          </strong>
          <MoreInfoContainer>
            <span>{`${vehicle.YearFab}/${vehicle.YearModel}`}</span>
            <span>{`${vehicle.KM}km`}</span>
          </MoreInfoContainer>
        </Price>
      </InfoContainer>
    </>
  );
}
