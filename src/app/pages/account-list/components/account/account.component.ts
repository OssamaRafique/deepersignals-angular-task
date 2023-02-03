import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExpandCollapseAnimation } from 'src/app/shared/animations/expand-collapse.animation';
import { IAccount } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ExpandCollapseAnimation],
})
export class AccountComponent {
  @Input() public account: IAccount;
  public isExpanded: boolean = true;

  public get hasChildren(): boolean {
    return this.account.accounts.length > 0;
  }

  public toggleExpansion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
