import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../../../../services/member.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-presentation-card',
    templateUrl: './presentation-card.html',
    styleUrls: ['./presentation-card.scss']
})
export class PresentationCard implements OnInit {
    @Input() description: string | undefined;
    public controller = new FormControl('');

    constructor(private httpClient: HttpClient, private service: MemberService) {
    }

    ngOnInit(): void {
        if (this.description)
            this.injectDescription(this.description);
        this.service.memberInfos$.subscribe({
            next: (memberInfos) => {
                if (memberInfos && memberInfos.memberDescription)
                    this.injectDescription(memberInfos.memberDescription);
            }
        });
    }

    public editing: boolean = false;

    public edit() {
        if (this.description == undefined)
            this.controller.setValue("");
        else
            this.controller.setValue(this.description);
        this.editing = true;
        this.removeInject();
    }

    public sending: boolean = false;
    public error: boolean = false;

    public save() {
        if (!this.sending) {
            this.sending = true;
            this.httpClient
                .post('data/user-data/update-description?code=' + this.service.code,
                    this.controller.value
                ).subscribe({
                complete: () => {
                    this.sending = false;
                    this.editing = false;
                },
                next: (bol) => {
                    this.error = !bol;
                    this.sending = false;
                    if (bol) {
                        this.service.loadInfos();
                    }
                },
                error: (error) => {
                    console.log('Problem : ' + error);
                }
            });
        }
    }

    public cancel() {
        this.editing = false;
        if (this.description)
            this.injectDescription(this.description);
    }

    public removeInject() {
        let main = document.getElementById("description");
        // @ts-ignore
        main.replaceWith(new DOMParser().parseFromString("<div id=\"containerInjector\" style='visibility: hidden'></div>", 'text/html').body.firstElementChild);
    }

    public injectDescription(str: string) {
        /*let match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
        let final = str;
        if (match != undefined)
            match.map(url => {
                final = final.replace(url, "<a style='color: var(--main-color);'  href=\"" + url + "\" target=\"_BLANK\">" + url + "</a>")
            })

        let content = "<p id='description' style='word-break: break-word; white-space: pre-line; max-height: 400px; overflow: scroll; text-align: justify;'>" + final + "</p>";
        content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
        let new_element = new DOMParser().parseFromString(content, 'text/html').body.firstElementChild;
        let main = document.getElementById("containerInjector");
        if (main != undefined) { // @ts-ignore
            main.replaceWith(new_element);
        }*/
    }

}
