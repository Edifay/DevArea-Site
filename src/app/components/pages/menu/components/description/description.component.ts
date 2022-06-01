import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  cheminFond:any="https://static.vecteezy.com/ti/vecteur-libre/p1/597645-fond-bleu-gratuit-vectoriel.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
