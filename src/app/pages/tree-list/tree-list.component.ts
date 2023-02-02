import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeListFormKeys } from 'src/app/shared/enums';
import { IAccountResponse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
})
export class TreeListComponent {
  public readonly treeListFormKeys: typeof TreeListFormKeys = TreeListFormKeys;
  public formGroup: FormGroup;
  public data: IAccountResponse = {
    id: 1,
    name: 'Deeper Signals',
    index_name: 'deepersignals',
    accounts: [
      { id: 26, name: 'Insight 222', index_name: 'insight', accounts: [] },
      {
        id: 6,
        name: 'Austria',
        index_name: 'austria',
        accounts: [
          {
            id: 7,
            name: 'Vienna',
            index_name: 'vienna',
            accounts: [
              {
                id: 8,
                name: 'Mölker Bastei',
                index_name: 'molker',
                accounts: [],
              },
              {
                id: 28,
                name: 'Additional account',
                index_name: 'account',
                accounts: [],
              },
            ],
          },
        ],
      },
      { id: 9, name: 'MindGym', index_name: 'mindgym', accounts: [] },
      { id: 76, name: 'J3Personica', index_name: 'j3personica', accounts: [] },
    ],
  };

  constructor(private _formBuilder: FormBuilder) {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this._formBuilder.group({
      [TreeListFormKeys.SearchControl]: this._formBuilder.control(null, [
        Validators.required,
      ]),
    });
  }
}
