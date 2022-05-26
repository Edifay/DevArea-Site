import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.scss']
})
export class NotFound implements OnInit {
  @Input() pseudo:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
