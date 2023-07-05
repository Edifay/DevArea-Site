import {Component, OnInit} from '@angular/core';
import {StaffService} from "../../../services/pagesServices/staff.service";
import {smoothAppear} from "../../../animations/smoothAppear";

export interface staffCard {
    name: string;
    bio: string;
    urlAvatar: string;
    idCss: string;
    id: string;
}

@Component({
    selector: 'app-staff',
    templateUrl: './staff.html',
    styleUrls: ['./staff.scss'],
    animations:[smoothAppear]
})
export class Staff implements OnInit {
    public staff: staffCard[] | undefined;

    constructor(private staffService : StaffService) {
        staffService.staffList$.subscribe(value => {
            this.staff = value;
        });
    }

    ngOnInit(): void {
        this.staffService.update();
    }

}
