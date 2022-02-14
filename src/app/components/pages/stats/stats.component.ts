import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {
  languages = [
    {
      name: "Chargement...",
      countMember: "150",
      color: 'd'
    }
  ];

  rolesId = ["0"];

  constructor(private httpClient: HttpClient) {
    this.try();
    this.getXpTop();
  }

  ngOnInit(): void {
  }

  request1: string = '';
  number: string = '1';

  try() {
    this.httpClient
      .get<any[]>('/assets/data/languages.json')
      .subscribe(data => {
          this.rolesId = data;
          this.number = this.rolesId.length.toString();
          console.log("Ici : ", this.number)
          this.request1 = this.rolesId.join('","');
          this.request1 = '?roles="' + this.request1 + '"';
          this.getLanguages();
        }
      );
  }

  getLanguages() {
    this.httpClient
      .get<any[]>('/data/stats/rolesCount_list' + this.request1)
      .subscribe(
        (response) => {
          this.languages = response;
          this.bigger();
          console.log(this.big);
        },
        (error) => {
          console.log('Error : ', error);
        }
      );
  }

  big: number = 0;
  bigString: string = '';

  bigger() {
    for (var val of this.languages)
      if (+(val.countMember) > this.big)
        this.big = +(val.countMember);
    this.bigString = this.big.toString();
  }

  XpBoard = [
    {
      name: "Chargement...",
      xp: 0,
      rank: 0,
      level: 0,
      urlAvatar: 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'
    }
  ]

  private number_fetch = 10;
  private load_per_click = 50;

  getXpTop() {
    this.httpClient
      .get<any[]>('/data/stats/xp_list?start=0&end=' + this.number_fetch.toString())
      .subscribe(
        (response) => {
          this.XpBoard = response;
        },
        (error) => {
          console.log('Error : ', error);
        }
      );
  }

  /*
  To prevent multiple load !
   */
  private loading = false;
  public display_mode_button = "block;";

  more(): void {
    if (!this.loading) {
      this.loading = true;
      this.httpClient
        .get<any[]>('/data/stats/xp_list?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_per_click).toString())
        .subscribe(
          (response) => {
            this.loading = false;
            this.XpBoard = [...this.XpBoard, ...response]
            if (this.number_fetch + this.load_per_click == this.XpBoard.length)
              this.number_fetch = this.XpBoard.length;
            else {
              this.display_mode_button = "none";
            }
          },
          (error) => {
            console.log('Error : ', error);
          }
        );
    }
  }

}
