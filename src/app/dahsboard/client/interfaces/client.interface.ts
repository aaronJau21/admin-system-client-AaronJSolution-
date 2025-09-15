export interface IGetClientAll {
  data: IClient[];
  meta: Meta;
}

export interface IClient {
  id: number;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  state: string;
  company_name: string;
}

export interface Meta {
  total: number;
  page: number;
  lastPage: number;
}
