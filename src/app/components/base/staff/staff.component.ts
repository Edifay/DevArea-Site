import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
    staff = [
        {
            name: 'Stramis',
            bio: "Rien pour l'instant",
            urlAvatar: "/assets/images/profilBot.jpg",
            idCss: "pair"
        },
        {
            name: 'Edifay',
            bio: "Nothing today",
            urlAvatar: "/assets/images/profilBot.jpg",
            idCss: "pair"
        }
    ];


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
