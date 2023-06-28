import {Component, Input, OnInit} from '@angular/core';
import {FreelanceField} from "../../../../../../../models/FreelanceContent";
import {CookieService} from "ngx-cookie-service";

@Component({
    selector: 'app-field',
    templateUrl: './field.html',
    styleUrls: ['./field.scss']
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
