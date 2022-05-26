import {Component, Input, OnInit} from '@angular/core';
import {FreelanceContent} from "../../../../../models/FreelanceContent";

@Component({
    selector: 'app-freelance-wiewer',
    templateUrl: './freelance-wiewer.html',
    styleUrls: ['./freelance-wiewer.scss']
})
export class FreelanceWiewer implements OnInit {
    @Input() public controller: boolean = false;
    @Input() public freelance: FreelanceContent | undefined;

    constructor() {
    }

    ngOnInit(): void {

    }



}
