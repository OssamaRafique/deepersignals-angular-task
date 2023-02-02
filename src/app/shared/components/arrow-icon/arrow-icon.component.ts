import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowIconComponent {
  @Input() pointingRight: boolean;
}
