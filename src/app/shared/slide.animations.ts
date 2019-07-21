import { trigger, style, transition, animate } from '@angular/animations';

export const verticalSlideTrigger = trigger('verticalSlide', [
  transition(':enter', [
    style({
      height: 0
    }),
    animate('0.5s cubic-bezier(0.42, 0, 0.58, 1)')
  ]),
  transition(':leave', [
    animate('0.5s cubic-bezier(0.42, 0, 0.58, 1)', style({
      height: 0
    }))
  ])
]);

export const horizontalSlideTrigger = trigger('horizontalSlide', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-25%)'
    }),
    animate('500ms ease-in', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ]),
  transition('* => delElement', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('500ms ease-in', style({
      opacity: 0,
      transform: 'translateX(125%)'
    }))
  ])
]);
