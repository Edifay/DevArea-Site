import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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

    constructor(private httpClient: HttpClient) {
        this.getStaff()
    }

    ngOnInit(): void {
    }

    getStaff() {
        this.httpClient
            .get<any[]>('/data/staff/staff_list')
            .subscribe(
                (response) => {
                    this.staff = response;
                },
                (error) => {
                    console.log('Problem : ' + error);
                }
            )

    }

    update() {
        this.getStaff();
    }

}
