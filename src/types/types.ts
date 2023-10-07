export type Row = {
  label: string;
  value: string | number;
  validity: boolean;
};

export interface Degree {
  id: string;
  title: string;
  field: string;
  year: number;
  details: string;
}

export interface Work {
  id: string;
  title: string;
  year: number;
  link: '';
}
