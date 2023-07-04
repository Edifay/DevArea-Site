import {Component, Input, OnInit} from '@angular/core';
import {FreelanceField} from "../../../../../../../models/FreelanceContent";
import {CookieService} from "ngx-cookie-service";
import {animate, query, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-field',
    templateUrl: './field.html',
    styleUrls: ['./field.scss'],
    animations: [
        trigger("openClose", [
            state('open', style(
                {
                    height: '*',
                    opacity: '1',
                    'margin-bottom':'15px',
                    transform:'scale(1)'
                }
            )),
            state('closed', style(
                {
                    height: '0',
                    opacity: '0',
                }
            )),
            transition('open => closed', [
                animate('0.08s')
            ]),
            transition('closed => open', [
                animate('0.08s')
            ]),
            state('bot', style(
                {
                    height: '*',
                    opacity: '1',
                }
            )),
            state('top', style(
                {
                    transform:'rotate(180deg)',
                }
            )),
            transition('bot => top', [
                animate('0.15s')
            ]),
            transition('top => bot', [
                animate('0.08s')
            ]),
        ]),
    ]
})
export class Field implements OnInit {
    @Input() public field: FreelanceField = {
        title: "",
        description: "",
        inline: false,
        prix: "",
        temps: ""
    }

    constructor(public cookieService: CookieService) {
    }

    ngOnInit(): void {
    }

    public show: boolean = false;

    public switch() {
        this.show = !this.show;
    }

}
