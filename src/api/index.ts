import { get } from 'api/methods';

export default {
  brand: {
    list: () => {
      return get<Make[]>('/Make');
    },
  },
  model: {
    list: (makeId: number) => {
      return get<Model[]>('/Model', {
        params: {
          MakeID: makeId,
        },
      });
    },
  },
  version: {
    list: (modelId: number) => {
      return get<Version[]>('/Version', {
        params: {
          ModelID: modelId,
        },
      });
    },
  },
  vehicles: {
    list: (page: number) => {
      return get<VehicleItem[]>('/Vehicles', {
        params: {
          Page: page,
        },
      });
    },
  },
};
