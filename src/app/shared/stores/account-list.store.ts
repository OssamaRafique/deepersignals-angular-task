import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { ComponentStore } from '@ngrx/component-store';
import {
  catchError,
  EMPTY,
  Observable,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { IAccount } from '../interfaces';
import { AccountListService } from '../services/account-list.service';
import { searchTree } from '../utils';

export interface AccountsState {
  account: IAccount | null;
  searchTerm: string;
  isLoading: boolean;
}

const DEFAULT_STATE: AccountsState = {
  account: null,
  searchTerm: '',
  isLoading: true,
};

@Injectable({
  providedIn: 'root',
})
export class AccountListStore extends ComponentStore<AccountsState> {
  constructor(
    private _accountListService: AccountListService,
    private _toast: HotToastService
  ) {
    super(DEFAULT_STATE);
    this._fetchAccount();
  }

  public get filteredData$(): Observable<IAccount | null> {
    return this.select(({ account, searchTerm }) =>
      searchTree(account as IAccount, searchTerm)
    );
  }

  public get isLoading$(): Observable<boolean> {
    return this.select((state) => state.isLoading);
  }

  private set account(account: IAccount) {
    this.updater((state, account: IAccount) => ({
      ...state,
      account,
    }))(account);
  }

  private set isLoading(isLoading: boolean) {
    this.updater((state, isLoading: boolean) => ({
      ...state,
      isLoading,
    }))(isLoading);
  }

  private _fetchAccount(): Subscription {
    return this.effect((trigger$) =>
      trigger$.pipe(
        switchMap(() => {
          this.isLoading = true;
          return this._accountListService.getAccountList().pipe(
            this._toast.observe({
              loading: 'Fetching...',
              success: 'Account fetched!',
              error: 'Could not fetch.',
            }),
            tap((account: IAccount) => {
              this.account = account;
              this.isLoading = false;
            }),
            catchError(() => EMPTY)
          );
        })
      )
    )();
  }
}
