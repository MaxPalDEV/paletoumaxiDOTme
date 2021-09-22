import { animate, animateChild, group, query, style, transition, trigger, keyframes } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
        style({
          opacity: 0,
        }),
        animate('800ms ease',
          style({ opacity:1 })
        ),
    ]),
  ]);
