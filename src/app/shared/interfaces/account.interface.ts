export interface IAccount {
  id: number;
  name: string;
  indexName: string;
  accounts: IAccount[];
}

export interface IAccountResponse {
  id: number;
  name: string;
  index_name: string;
  accounts: IAccountResponse[];
}
