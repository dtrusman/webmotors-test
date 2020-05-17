import styled from 'styled-components';

import { Grid } from 'components';

export const Row = styled(Grid)``;

export const VehicleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Vehicles = styled.div`
  display: flex;
`;

export const SellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    position: absolute;
    top: 14%;
    left: 13%;
  }

  @media (max-width: 720px) {
    position: absolute;
    top: 14%;
    left: 12%;
  }
`;

export const FilterContainer = styled.div`
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const SellButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  font-weight: bold;
  width: 222px;
  height: 39px;
  border: 2px solid orange;
  border-radius: 4px;

  span {
    font-size: 14px;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid #c80a2e;
    color: #c80a2e;
  }

  @media (max-width: 600px) {
    width: 286px;
  }

  @media (max-width: 720px) {
    width: 314px;
  }
`;

/** Advanced Search */
export const AdvancedSearch = styled.span`
  font-size: 18px;
  display: flex;
  height: 50px;
  align-items: center;
  color: #f3123c;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: #c80a2e;
      transition: 0.6s;
      opacity: 0.6;
    }
  }
`;

/** Clean Filter */
export const CleanFilter = styled.span`
  display: flex;
  font-size: 18px;
  height: 50px;
  align-items: center;

  a {
    cursor: pointer;
  }
`;

/** Clean Filter */
export const Offers = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3123c;
  border: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #c80a2e;
    transition: 0.6s;
  }

  @media (max-width: 600px) {
    height: 50px;
  }
`;
