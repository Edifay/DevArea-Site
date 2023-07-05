import { Component, Input, OnInit } from '@angular/core';
import {smoothAppear} from "../../../animations/smoothAppear";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss'],
  animations:[smoothAppear]
})
export class NotFound implements OnInit {
  @Input() pseudo:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
