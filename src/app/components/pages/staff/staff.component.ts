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
      name: 'Chargement...',
      bio: "Chargement..",
      urlAvatar: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
      idCss: "pair"
    },
    {
      name: 'Chargement...',
      bio: "Chargement..",
      urlAvatar: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
      idCss: "pair"
    },
    {
      name: 'Chargement...',
      bio: "Chargement..",
      urlAvatar: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
      idCss: "pair"
    },
    {
      name: 'Chargement...',
      bio: "Chargement..",
      urlAvatar: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
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
