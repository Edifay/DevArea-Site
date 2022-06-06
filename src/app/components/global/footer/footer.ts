import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
