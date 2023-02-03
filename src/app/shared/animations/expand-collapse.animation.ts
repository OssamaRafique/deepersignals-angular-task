import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const ExpandCollapseAnimation: AnimationTriggerMetadata = trigger(
  'expandCollapse',
  [
    state('expandCollapseState', style({ height: '*' })),
    transition('* => void', [
      style({ height: '*', overflow: 'hidden' }),
      animate(225, style({ height: '0', overflow: 'hidden' })),
    ]),
    transition('void => *', [
      style({ height: '0', overflow: 'hidden' }),
      animate(225, style({ height: '*', overflow: 'hidden' })),
    ]),
  ]
);
