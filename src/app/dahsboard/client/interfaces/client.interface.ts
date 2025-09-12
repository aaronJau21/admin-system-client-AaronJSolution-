export interface IGetClientAll {
  data: IClient[];
  meta: Meta;
}

export interface IClient {
  id: number;
  name: string;
  father_last_name: string;
  mother_last_name: string;
  email: string;
  phone: string;
  state: string;
}

export interface Meta {
  total: number;
  page: number;
  lastPage: number;
}
