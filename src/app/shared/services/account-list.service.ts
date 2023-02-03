import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IAccount, IAccountResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AccountListService {
  private _apiUrl =
    'https://71013f65-b118-41be-9b20-f062e0e58598.mock.pstmn.io/accounts';

  constructor(private _httpClient: HttpClient) {}

  public getAccountList(): Observable<IAccount> {
    return this._httpClient
      .get<IAccountResponse>(this._apiUrl)
      .pipe(map((account: IAccountResponse) => this._mapAccountData(account)));
  }

  private _mapAccountData(account: IAccountResponse): IAccount {
    return {
      id: account.id,
      name: account.name,
      indexName: account.index_name,
      accounts: account.accounts.map((acc) => this._mapAccountData(acc)),
    };
  }
}
