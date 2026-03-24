 interface Address {
  city: string;
  zip: string;
}

interface User {
  id: number;
  name: string;
  address: Address;
}

export interface RootResponse {
  user: User;
}
