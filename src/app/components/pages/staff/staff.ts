import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StaffService} from "../../../services/pagesServices/staff.service";

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
    styleUrls: ['./staff.scss']
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
