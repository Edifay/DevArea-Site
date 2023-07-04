import {Component, Input, OnInit} from '@angular/core';
import {FreelanceContent} from "../../../../../models/FreelanceContent";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../../../../services/member.service";
import {tabs} from "../../options";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-freelance-wiewer',
    templateUrl: './freelance-wiewer.html',
    styleUrls: ['./freelance-wiewer.scss'],
    animations:[
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ opacity:0 }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ opacity:1 }))
            ])
        ])
    ]
})
export class FreelanceWiewer implements OnInit {
    @Input() public controller: boolean = false;
    @Input() public freelance: FreelanceContent | undefined;

    constructor(private router: Router, private httpClient: HttpClient, private memberService: MemberService) {
    }

    ngOnInit(): void {

    }

    public edit() {
        this.router.navigate(["/freelance-creator"]);
    }

    public comfirm: boolean = false;

    public switchComfirm() {
        console.log("Switch !")
        this.comfirm = !this.comfirm;
    }

    public loading: boolean = false;
    public error: boolean = false;

    public delete() {
        this.comfirm = false;
        if (!this.loading) {
            this.loading = true;
            this.httpClient
                .get('/data/freelances/delete?code=' + this.memberService.code).subscribe({
                complete: () => {
                    this.loading = false;
                },
                next: (bol) => {
                    this.error = !bol;
                    if (bol) {
                        this.memberService.loadInfos();
                        this.router.navigate(['/', "options"], {
                            queryParams: {
                                open: tabs.Freelance
                            }
                        });
                    }
                },
                error: (error) => {
                    console.log('Problem : ' + error);
                }
            });
        }
    }

    public loadingBump: boolean = false;
    public errorBump: boolean = false;

    public bump() {
        if (!this.loadingBump) {
            this.loadingBump = true;
            this.httpClient
                .get('/data/freelances/bump?code=' + this.memberService.code).subscribe({
                complete: () => {
                    this.loadingBump = false;
                },
                next: (bol) => {
                    this.errorBump = !bol;
                    if (bol) {
                        this.memberService.loadInfos();
                        this.router.navigate(['/', "options"], {
                            queryParams: {
                                open: tabs.Freelance
                            }
                        });
                    } else {
                        setTimeout(() => {
                            this.errorBump = false;
                        }, 5000);
                    }
                },
                error: (error) => {
                    console.log('Problem : ' + error);
                }
            });
        }
    }

    public create() {
        this.router.navigate(['/', "freelance-creator"]);
    }
}
