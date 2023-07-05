import { Component, OnInit } from '@angular/core';
import {smoothAppear} from "../../../animations/smoothAppear";

@Component({
  selector: 'app-how-connect',
  templateUrl: './how-connect.html',
  styleUrls: ['./how-connect.scss'],
  animations:[smoothAppear]
})
export class HowConnect implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
