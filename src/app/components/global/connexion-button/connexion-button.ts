import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {MemberService} from "../../../services/member.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-connexion-button',
    templateUrl: './connexion-button.html',
    styleUrls: ['./connexion-button.scss']
})
export class ConnexionButton implements OnInit {

    @Input() sourceImage: string = '/assets/images/reseaux/discord.png';
    @Input() name: string = "Not connected";
    @Input() style_on_connection_change = "not_connected";

    public visibility_menu = "hidden";

    constructor(private service: MemberService, private cookieService: CookieService, private router: Router) {
    }

    ngOnInit(): void {
    }

    openMenu(): void {
        this.visibility_menu = "visible";
    }

    closeMenu(): void {
        this.visibility_menu = "hidden";
    }

    connection() {
        /*
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=579257697048985601&redirect_uri=https%3A%2F%2Fdevarea.fr%2Fdata%2Fauth&response_type=code&scope=identify';
        */
        this.router.navigate(['/', 'how-connect'])
    }

    disconnection() {
        this.cookieService.delete('codeDiscord');
        this.service.reset();
    }


}
