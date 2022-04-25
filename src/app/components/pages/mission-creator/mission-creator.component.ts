import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../../services/member.service";
import {Router, RouterModule} from "@angular/router";

@Component({
    selector: 'app-mission-creator',
    templateUrl: './mission-creator.component.html',
    styleUrls: ['./mission-creator.component.scss']
})
export class MissionCreatorComponent implements OnInit {

    public titleController = new FormControl('');
    public descriptionController = new FormControl('');
    public dateRetourController = new FormControl('Non définie');
    public langageController = new FormControl('Non définie');
    public supportController = new FormControl('Non définie');
    public niveauController = new FormControl('Non définie');
    public budgetController = new FormControl('');

    constructor(private httpClient: HttpClient, private memberService: MemberService, private router: Router) {
    }

    connected: any;

    ngOnInit(): void {
        this.memberService.connected$.subscribe({
            next: (connected) => {
                this.connected = connected;
                if (this.connected == "not_connected")
                    this.router.navigate(['/', 'how-connect']);
            }
        });

    }

    public sendind: boolean = false;
    public error: boolean = false;

    validate() {
        if (!this.sendind) {
            this.sendind = true;
            this.httpClient
                .post('/data/missions/create?code=' + this.memberService.code,

                    {
                        title: this.titleController.value,
                        description: this.descriptionController.value,
                        dateRetour: this.dateRetourController.value,
                        langage: this.langageController.value,
                        support: this.supportController.value,
                        niveau: this.niveauController.value,
                        budget: this.budgetController.value
                    }
                ).subscribe({
                complete: () => {
                    this.sendind = false;
                },
                next: (bol) => {
                    this.error = !bol;
                    if (bol) {
                        this.memberService.loadInfos();
                        this.router.navigate(['options']);
                    }
                },
                error: (error) => {
                    console.log('Problem : ' + error);
                }
            });
        }
    }

}
