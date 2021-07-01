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
            urlAvatar: "http://devarea.fr/assets/images/profilBot.jpg"
        },
        {
            name: 'Edifay',
            bio: "Nothing today",
            urlAvatar: "http://devarea.fr/assets/images/profilBot.jpg"
        }
    ];


    constructor(private httpClient: HttpClient) {
        this.getStaff()
    }

    ngOnInit(): void {
    }

    getStaff() {
        this.httpClient
            .get<any[]>('/data/staff_list')
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
