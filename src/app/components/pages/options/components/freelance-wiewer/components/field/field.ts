import {Component, Input, OnInit} from '@angular/core';
import {FreelanceField} from "../../../../../../../models/FreelanceContent";

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

    constructor() {
    }

    ngOnInit(): void {
    }

    public show: boolean = false;

    public switch() {
        this.show = !this.show;
    }

}
