import { Component, OnInit,ElementRef, ViewChild  } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-customisation',
  templateUrl: './customisation.html',
  styleUrls: ['./customisation.scss']
})


export class Customisation implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    let backgroundValue = document.getElementById('background') as HTMLInputElement;
    let modulesValue = document.getElementById('modules') as HTMLInputElement;
    let textValue = document.getElementById('textes') as HTMLInputElement;
    let titleValue = document.getElementById('titles') as HTMLInputElement;
    let buttonsInaValue = document.getElementById('buttonsIna') as HTMLInputElement;
    let buttonsHoverValue = document.getElementById('buttonsHover') as HTMLInputElement;
    let buttonsActValue = document.getElementById('buttonsAct') as HTMLInputElement;
    // get all the css variables
    //get body element
    let body = document.getElementsByTagName('body')[0];
    let background = getComputedStyle(body).getPropertyValue('--background-color').replace(/\s/g, "");
    let modules = getComputedStyle(body).getPropertyValue('--background-component-color').replace(/\s/g, "");
    let textes = getComputedStyle(body).getPropertyValue('--main-text-color').replace(/\s/g, "");
    let titles = getComputedStyle(body).getPropertyValue('--main-title-contrast-color').replace(/\s/g, "");
    let buttonsIna = getComputedStyle(body).getPropertyValue('--main-color').replace(/\s/g, "");
    let buttonsHover = getComputedStyle(body).getPropertyValue('--main-color-hover').replace(/\s/g, "");
    let buttonsAct = getComputedStyle(body).getPropertyValue('--main-color-active').replace(/\s/g, "");
    // set the values in the inputs
    //@ts-ignore
    backgroundValue?.value = background;
    //@ts-ignore
    modulesValue?.value = modules;
    //@ts-ignore
    textValue?.value = textes;
    //@ts-ignore
    titleValue?.value = titles;
    //@ts-ignore
    buttonsInaValue?.value = buttonsIna;
    //@ts-ignore
    buttonsHoverValue?.value = buttonsHover;
    //@ts-ignore
    buttonsActValue?.value = buttonsAct;
  }
  // on click of the button
  
  saveSettings() {
    let backgroundValue = document.getElementById('background') as HTMLInputElement;
    let modulesValue = document.getElementById('modules') as HTMLInputElement;
    let textValue = document.getElementById('textes') as HTMLInputElement;
    let titleValue = document.getElementById('titles') as HTMLInputElement;
    let buttonsInaValue = document.getElementById('buttonsIna') as HTMLInputElement;
    let buttonsHoverValue = document.getElementById('buttonsHover') as HTMLInputElement;
    let buttonsActValue = document.getElementById('buttonsAct') as HTMLInputElement;
    let background = backgroundValue?.value;
    let modules = modulesValue?.value;
    let text = textValue?.value;
    let title = titleValue?.value;
    let buttonsIna = buttonsInaValue?.value;
    let buttonsHover = buttonsHoverValue?.value;
    let buttonsAct = buttonsActValue?.value;
    // create one cookie with all of this values
    let cookie = {"background": background, "modules": modules, "textes": text, "titles": title, "buttonsIna": buttonsIna, "buttonsHover": buttonsHover, "buttonsAct": buttonsAct};
    this.cookieService.set('custom', JSON.stringify(cookie));
    // refresh the page
    window.location.reload();
  }
  resetSettings() {
    this.cookieService.delete('custom');
    window.location.reload();
  }


}