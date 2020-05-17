import { useState, useEffect, useCallback } from 'react';

import API from 'api';

export default function () {
  const [brands, setBrands] = useState<ComboboxOption<number>[]>([]);
  const [models, setModels] = useState<ComboboxOption<number>[]>([]);
  const [versions, setVersions] = useState<ComboboxOption<number>[]>([]);
  const [vehicles, setVehicles] = useState<VehicleItem[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<VehicleItem[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<ComboboxOption<number>>();
  const [selectedModel, setSelectedModel] = useState<ComboboxOption<number>>();
  const [selectedVersion, setSelectedVersion] = useState<ComboboxOption<number>>();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>('carros');

  const fetchModel = useCallback(async () => {
    if (selectedBrand) {
      const [error, response] = await API.model.list(selectedBrand.value);
      const formatted = response?.map((model: Model) => ({
        label: model.Name,
        value: model.ID,
      }));
      setModels(formatted!);
    }
  }, [selectedBrand]);

  const fetchVersion = useCallback(async () => {
    if (selectedModel) {
      const [error, response] = await API.version.list(selectedModel.value);
      const formatted = response?.map((version: Version) => ({
        label: version.Name,
        value: version.ID,
      }));
      setVersions(formatted!);
    }
  }, [selectedModel]);

  useEffect(() => {
    const fetchBrands = async () => {
      const [error, response] = await API.brand.list();
      if (response) {
        const formatted = response.map((make: Make) => ({
          label: make.Name,
          value: make.ID,
        }));
        setBrands(formatted);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    fetchModel();
  }, [selectedBrand]);

  useEffect(() => {
    fetchVersion();
  }, [selectedModel]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const [error, response] = await API.vehicles.list(1);
      if (response) {
        setVehicles(response);
        setFilteredVehicles(response);
      }
    };
    fetchVehicles();
  }, []);

  const resetFilters = () => {
    setSelectedBrand(undefined);
    setSelectedModel(undefined);
    setSelectedVersion(undefined);
    setModels([]);
    setVersions([]);
    setFilteredVehicles(vehicles);
  };

  const onSelectBrand = (selected: ComboboxOption<number>) => {
    setSelectedModel(undefined);
    setSelectedVersion(undefined);
    const _vehicles = Array.from(vehicles);
    const filteredVehicles = _vehicles.filter(
      (vehicle: VehicleItem) => vehicle.Make.toLowerCase() === selected.label.toLowerCase(),
    );
    setFilteredVehicles(filteredVehicles);
    setSelectedBrand(selected);
    setVersions([]);
  };

  const onSelectModel = (selected: ComboboxOption<number>) => {
    setSelectedVersion(undefined);
    const _vehicles = Array.from(vehicles);
    const filteredVehicles = _vehicles.filter(
      (vehicle: VehicleItem) =>
        vehicle.Model.toLowerCase() === selected.label.toLowerCase() &&
        vehicle.Make.toLowerCase() === selectedBrand?.label.toLowerCase(),
    );
    setFilteredVehicles(filteredVehicles);
    setSelectedModel(selected);
  };

  const onSelectVersion = (selected: ComboboxOption<number>) => {
    const _vehicles = Array.from(vehicles);
    const filteredVehicles = _vehicles.filter(
      (vehicle: VehicleItem) =>
        vehicle.Version.toLowerCase() === selected.label.toLowerCase() &&
        vehicle.Make.toLowerCase() === selectedBrand?.label.toLowerCase() &&
        vehicle.Model.toLowerCase() === selectedModel?.label.toLowerCase(),
    );
    setFilteredVehicles(filteredVehicles);
    setSelectedVersion(selected);
  };

  return {
    brands,
    models,
    versions,
    selectedBrand,
    setSelectedBrand,
    selectedModel,
    setSelectedModel,
    selectedVersion,
    setSelectedVersion,
    resetFilters,
    onSelectBrand,
    onSelectModel,
    onSelectVersion,
    setSelectedVehicle,
    selectedVehicle,
    filteredVehicles,
  };
}
