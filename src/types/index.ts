
export interface ChildPatrimony {
  label: string
  value: string
  metadata: {
    code: string
  }
}

export interface Patrimony {
  label: string
  childs: ChildPatrimony[]
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
}
