type Vehicle = 'carros' | 'motos';

interface ComboboxOption<T> {
  label: string;
  value: T;
}

interface ComboboxProps {
  name: string;
  options: ComboboxOption<T>[];
  label?: string;
  placeholder?: string;
  value?: ComboboxOption<T>;
  error?: string;
  onSelect?: (value: ComboboxOption<T>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  searchable?: boolean;
  gender?: 'a' | 'o';
}

interface GridProps {
  columns?: number;
  rows?: number;
  gap?: number;
}

interface CheckboxProps {
  name?: string;
  label: string;
  value?: any;
  checked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface Make {
  ID: number;
  Name: string;
}

interface Model {
  ID: number;
  MakeID: number;
  Name: string;
}

interface Version {
  ModelID: number;
  ID: number;
  Name: string;
}

interface VehicleItem {
  ID: number;
  Make: string;
  Model: string;
  Version: string;
  Image: string;
  KM: number;
  Price: string;
  YearModel: number;
  YearFab: number;
  Color: string;
}
