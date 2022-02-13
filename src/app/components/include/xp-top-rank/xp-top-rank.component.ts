import {Component, Input, OnInit} from '@angular/core';
import {NONE_TYPE} from "@angular/compiler";

@Component({
  selector: 'app-xp-top-rank',
  templateUrl: './xp-top-rank.component.html',
  styleUrls: ['./xp-top-rank.component.scss']
})
export class XpTopRankComponent implements OnInit {
  @Input() url: string = 'https://www.magimix.com/webroot-mobile/img/loading.gif'
  @Input() pseudo: string = 'Stramis';
  @Input() rank: number = 0;
  @Input() xp: number = 10000000;
  @Input() trophy: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.trophy_test()
  }

  trophy_test() {
    if (this.rank === 1)
      this.trophy = '🏆';
    else if (this.rank === 2)
      this.trophy = '🥈';
    else if (this.rank === 3)
      this.trophy = '🥉';
    else
      this.trophy = "" + this.rank;

  }

}
