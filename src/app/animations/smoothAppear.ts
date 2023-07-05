import {animate, state, style, transition, trigger} from "@angular/animations";

export const smoothAppear = trigger('appear', [
    transition('void => *', [
        style({opacity: 0}),
        animate(200)
    ]),
    transition('* => void', [
        animate(200, style({opacity: 1}))
    ])
]);