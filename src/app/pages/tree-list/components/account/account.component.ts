import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAccountResponse } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expandCollapse', [
      state('expandCollapseState', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*', overflow: 'hidden' }),
        animate(225, style({ height: '0', overflow: 'hidden' })),
      ]),
      transition('void => *', [
        style({ height: '0', overflow: 'hidden' }),
        animate(225, style({ height: '*', overflow: 'hidden' })),
      ]),
    ]),
  ],
})
export class AccountComponent {
  @Input() public account: IAccountResponse;
  public isExpanded: boolean = false;

  public get hasChildren(): boolean {
    return this.account.accounts.length > 0;
  }

  public toggleExpansion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
