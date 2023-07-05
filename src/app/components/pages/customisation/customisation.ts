import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {smoothAppear} from "../../../animations/smoothAppear";


@Component({
  selector: 'app-customisation',
  templateUrl: './customisation.html',
  styleUrls: ['./customisation.scss'],
  animations:[smoothAppear]
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
    backgroundValue.value = background;
    modulesValue.value = modules;
    textValue.value = textes;
    titleValue.value = titles;
    buttonsInaValue.value = buttonsIna;
    buttonsHoverValue.value = buttonsHover;
    buttonsActValue.value = buttonsAct;
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
    this.cookieService.set('theme', 'custom_theme');
    // refresh the page
    window.location.reload();
  }

  resetSettings() {
    this.cookieService.set('theme', 'dark_theme');
    this.cookieService.delete('custom');
    window.location.reload();
  }

  customExist(){
    let retour;
    if (this.cookieService.get('custom')) {
      retour = true;
    }
    else {
      retour = false;
    }
    return retour;
  }

  editBackground(){
    let backgroundValue = document.getElementById('background') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--background-color: ${backgroundValue.value};`;
  }

  editModules(){
    let modulesValue = document.getElementById('modules') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--background-component-color: ${modulesValue.value};`;
  }

  editTextes(){
    let textesValue = document.getElementById('textes') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--main-text-color: ${textesValue.value};`;
  }

  editTitles(){
    let titlesValue = document.getElementById('titles') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--main-title-contrast-color: ${titlesValue.value};`;
  }

  editButtonsIna(){
    let buttonsInaValue = document.getElementById('buttonsIna') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--main-color: ${buttonsInaValue.value};`;
  }

  editButtonsHover(){
    let buttonsHoverValue = document.getElementById('buttonsHover') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--main-color-hover: ${buttonsHoverValue.value};`;
  }

  editButtonsAct(){
    let buttonsActValue = document.getElementById('buttonsAct') as HTMLInputElement;
    var body:HTMLElement = document.querySelector("body") as HTMLElement;
    body.style.cssText = body.style.cssText + `--main-color-active: ${buttonsActValue.value};`;
  }


  shareSettings() {
    // get the cookie
    let cookie = this.cookieService.get('custom');
    // write it in the text area
    let textAreaShare = document.getElementById('shareTheme') as HTMLTextAreaElement;
    textAreaShare.style.display = "block";
    let textAreaImport = document.getElementById('importDiv') as HTMLTextAreaElement;
    textAreaImport.style.display = "none";
    textAreaShare.value = cookie;
  }

  importSettings(){
    let textAreaImport = document.getElementById('importDiv') as HTMLTextAreaElement;
    textAreaImport.style.display = "block";
    let textAreaShare = document.getElementById('shareTheme') as HTMLTextAreaElement;
    textAreaShare.style.display = "none";
  }
  validateImportSettings(){
    let textAreaImport = document.getElementById('importTheme') as HTMLTextAreaElement;
    let cookie = textAreaImport.value;

    // check if the cookie is valid
    let listKeys = ['background', 'modules', 'textes', 'titles', 'buttonsIna', 'buttonsHover', 'buttonsAct'];
    let cookieJson = JSON.parse(cookie);

    if (listKeys.every(key => CSS.supports('color', cookieJson[key]))) {
      this.cookieService.set('custom', JSON.stringify(cookieJson).replace(/\\/g, ""));
      this.cookieService.set('theme', 'custom_theme');
      window.location.reload();
    } else {
      alert('Cookie invalide');
    }
  }
}
