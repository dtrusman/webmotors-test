import { createContext } from 'react';

interface FilterContext {
  setSelectedVehicle: (vehicle: Vehicle) => void;
  selectedVehicle: Vehicle;
  resetFilters: Function;
  brands: ComboboxOption<number>[];
  models: ComboboxOption<number>[];
  selectedBrand?: ComboboxOption<number>;
  onSelectBrand: (value: ComboboxOption<any>) => void;
  selectedModel?: ComboboxOption<number>;
  onSelectModel: (value: ComboboxOption<any>) => void;
  versions: ComboboxOption<number>[];
  selectedVersion?: ComboboxOption<number>;
  onSelectVersion: (value: ComboboxOption<any>) => void;
}

export default createContext<FilterContext>({
  setSelectedVehicle: () => ({}),
  selectedVehicle: 'carros',
  resetFilters: () => ({}),
  brands: [],
  models: [],
  onSelectBrand: () => ({}),
  onSelectModel: () => ({}),
  versions: [],
  onSelectVersion: () => ({}),
});
