import {Component, enableProdMode, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {MemberService} from "../services/member.service";
import {MemberInfos} from "../models/member-infos";
import {Router} from '@angular/router';

let count = 0;
let oldPage = window.location.href.split('/').pop()

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss']
})
export class App {

    memberInfos: MemberInfos | undefined;
    connected: any;

    public page_theme = "light_theme";


    constructor(private cookieService: CookieService, private _memberService: MemberService, private router: Router) {
        enableProdMode();
        this._memberService.memberInfos$.subscribe({
            next: (memberInfos) => this.memberInfos = memberInfos
        })

        this._memberService.connected$.subscribe({
            next: (connected) => this.connected = connected
        })

        if (this.cookieService.get('theme'))
            this.page_theme = this.cookieService.get('theme');
        // @ts-ignore
        document.getElementById("body").className = this.page_theme;
    }

    ngOnInit(): void {
    }

    switch_theme(): void {
        const page = window.location.href.split('/').pop();
        if (oldPage != page) {
            count = 0;
            oldPage = page;
        } else {
            count++;
        }
        var body: HTMLElement = document.querySelector("body") as HTMLElement;
        if (this.page_theme == "dark_theme") {
            body.style.cssText = "";
            this.page_theme = "light_theme";
            this.cookieService.set('theme', 'light_theme');
        } else if (this.page_theme == "light_theme" && this.cookieService.get('custom')) {

            let custom = JSON.parse(this.cookieService.get('custom'));
            body.style.cssText = `--background-color: ${custom.background}; --background-component-color: ${custom.modules}; --main-text-color: ${custom.textes}; --main-title-contrast-color: ${custom.titles}; --main-title-color: ${custom.titles}; --main-color: ${custom.buttonsIna}; --main-color-hover: ${custom.buttonsHover}; --main-color-active: ${custom.buttonsAct};`;
            this.page_theme = "custom_theme";
            this.cookieService.set('theme', 'custom_theme');
        } else {
            body.style.cssText = "";
            this.page_theme = "dark_theme";
            this.cookieService.set('theme', 'dark_theme');
        }
        if (count == 10 && page != "customisation") {
            count = 0
            alert("Tu viens de trouver un easter egg ! Félicitation") // /!\ sans ça la redirection ne sa fais pas
            this.router.navigate(['/customisation']);
        }
        // @ts-ignore
        document.getElementById("body").className = this.page_theme;
    }
}