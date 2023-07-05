import { Component, OnInit } from '@angular/core';
import {smoothAppear} from "../../../animations/smoothAppear";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.html',
  styleUrls: ['./to-do.scss'],
  animations:[smoothAppear]
})
export class ToDo implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
