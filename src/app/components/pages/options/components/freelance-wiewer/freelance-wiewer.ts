import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-freelance-wiewer',
    templateUrl: './freelance-wiewer.html',
    styleUrls: ['./freelance-wiewer.scss']
})
export class FreelanceWiewer implements OnInit {
    @Input() public controller: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
