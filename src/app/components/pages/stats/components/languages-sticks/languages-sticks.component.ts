import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages-sticks',
  templateUrl: './languages-sticks.component.html',
  styleUrls: ['./languages-sticks.component.scss']
})
export class LanguagesSticksComponent implements OnInit {
  @Input() name:string='No';
  @Input() Members:string='0';
  @Input() color:string='0';
  @Input() numberOfLanguages:string='0';
  @Input() bigger:string='0';
  constructor() { }

  ngOnInit(): void {
  }
  getColor(){
    //console.log(this.bigger);
    //console.log(this.color);
    return this.color;
  }
  
  getCent(){
    //console.log((800/+(this.numberOfLanguages).toString()+'px'));
    return (900/+(this.numberOfLanguages).toString()+'px');
  }


  getHeight(){
    //console.log(this.bigger);
    //console.log(((450/+(this.bigger))*+(this.numberOfLanguages)).toString()+'px');
    return(((450/+(this.bigger))*+(this.Members)).toString()+'px');
  }

}
