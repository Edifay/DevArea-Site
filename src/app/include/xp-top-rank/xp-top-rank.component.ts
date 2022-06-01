import { Component, Input, OnInit } from '@angular/core';
import {NONE_TYPE} from "@angular/compiler";

@Component({
  selector: 'app-xp-top-rank',
  templateUrl: './xp-top-rank.component.html',
  styleUrls: ['./xp-top-rank.component.scss']
})
export class XpTopRankComponent implements OnInit {
  @Input() pseudo:string='Stramis';
  @Input() rank:number=0;
  @Input() xp:number=10000000;
  @Input() index:number=0;
  @Input() trophy:string='';

  rank2: string=((+(this.index))+1).toString();
  test(){

    console.log(this.xp)
  }

  constructor() {
    this.test();

  }

  ngOnInit(): void {
    this.trophy_test()
  }
  trophy_test(){
    if (this.index===1){
      console.log('Gagné')
      this.trophy='🏆';

    }

    else if (this.index===2){
      this.trophy='🥈';
    }

    else if (this.index===3){
      this.trophy='🥉';

    }
  }

}
