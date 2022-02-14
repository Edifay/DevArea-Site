import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})

export class MissionsComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.fetch_mission();
  }

  missions_list = [
    {
      title: "title",
      description: "description..",
      prix: "price",
      date_retour: "date de retour",
      langage: "langage utilisé",
      support: "le support utlisé",
      niveau: "le niveau requis",
      member_name: "pseudo du membre",
      avatar: "https://www.magimix.com/webroot-mobile/img/loading.gif",
      member_tag: "le tag du membre",
      message_id: "0"
    }
  ]

  private number_fetch = 5;
  private load_on_more = 10;

  fetch_mission(): void {
    this.httpClient
      .get<any[]>('/data/missions/get?start=0&end=' + this.number_fetch)
      .subscribe(
        (response) => {
          this.missions_list = response;
        },
        (error) => {
          console.log('Error : ', error);
        }
      );
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {

    let total = document.documentElement.scrollHeight;
    let actual_position = document.documentElement.scrollTop;
    let size_of_screen = document.documentElement.clientHeight;

    if (total - actual_position < 2 * size_of_screen) {
      this.fetch_more();
    }

  }

  private loading = false;

  fetch_more(): void {
    if (!this.loading) {
      console.log("Load more !")
      this.loading = true;
      this.httpClient
        .get<any[]>('/data/missions/get?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_on_more).toString())
        .subscribe(
          (response) => {
            this.missions_list = [...this.missions_list, ...response]
            if (this.number_fetch + this.load_on_more == this.missions_list.length){
              this.number_fetch = this.missions_list.length;
              this.loading = false;
            }
          },
          (error) => {
            console.log('Error : ', error);
          }
        );
    }
  }

}
