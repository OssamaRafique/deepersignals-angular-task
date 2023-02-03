import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { TreeListFormKeys } from 'src/app/shared/enums';
import { IAccount, IAccountResponse } from 'src/app/shared/interfaces';
import { AccountListStore } from 'src/app/shared/stores/account-list.store';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit, OnDestroy {
  public readonly treeListFormKeys: typeof TreeListFormKeys = TreeListFormKeys;
  public formGroup: FormGroup;
  public filteredAccountData$: Observable<IAccount | null>;
  public isLoading$: Observable<boolean>;
  private _destroy: Subject<void> = new Subject<void>();

  constructor(
    private _accountListStore: AccountListStore,
    private _formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.initDataStreams();
    this.subscribeToSearchValueChanges();
  }

  public ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  private initForm(): void {
    this.formGroup = this._formBuilder.group({
      [TreeListFormKeys.SearchControl]: this._formBuilder.control(null, [
        Validators.required,
      ]),
    });
  }

  private initDataStreams(): void {
    this.filteredAccountData$ = this._accountListStore.filteredData$;
    this.isLoading$ = this._accountListStore.isLoading$;
  }

  private subscribeToSearchValueChanges(): void {
    this.formGroup
      .get(TreeListFormKeys.SearchControl)
      ?.valueChanges.pipe(takeUntil(this._destroy), debounceTime(300))
      .subscribe((searchTerm: string) => {
        this._accountListStore.patchState({ searchTerm });
      });
  }
}
