import {Component, Input, OnInit} from '@angular/core';
import {FreelanceContent, FreelanceField} from "../../../models/FreelanceContent";
import {FormControl} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {Router} from "@angular/router";
import {MemberInfos} from "../../../models/member-infos";
import {InputFieldData} from "./components/input-field/input-field";
import {HttpClient} from "@angular/common/http";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function dataFieldToField(datas: InputFieldData[]): FreelanceField[] {
    const fields: FreelanceField[] = [];
    for (let data of datas) {
        fields.push({
            title: data.title.value,
            temps: data.temps.value == "" ? "empty" : data.temps.value,
            prix: data.prix.value == "" ? "empty" : data.prix.value,
            description: data.description.value,
            inline: false,
        })
    }
    return fields;
}


@Component({
    selector: 'app-freelance-creator',
    templateUrl: './freelance-creator.html',
    styleUrls: ['./freelance-creator.scss']
})
export class FreelanceCreator implements OnInit {

    connected: any;

    @Input() public freelance: FreelanceContent = {
        avatar_url: "",
        description: "Présentez vous, et décrivez vos expériences...",
        fields: [{
            title: "Donnez un titre à votre compétence...",
            prix: "Donnez un prix à votre compétence...",
            temps: "Donnez le temps nécessaire pour réalisé votre compétence...",
            description: "Donnez une description précise de votre compétence...",
            inline: false,
        }],
        member_id: "",
        name: "Nom Prenom"
    }

    public nameController!: FormControl;
    public descriptionController!: FormControl;
    public memberInfos: MemberInfos | undefined;

    public fields: InputFieldData[] = [];

    constructor(private memberService: MemberService, private router: Router, private httpClient: HttpClient) {
    }

    ngOnInit(): void {

        this.memberService.connected$.subscribe({
            next: (connected) => {
                this.connected = connected;
                if (this.connected == "not_connected")
                    this.router.navigate(['/', 'how-connect']);
            }
        });

        this.memberService.memberInfos$.subscribe({
            next: (memberInfos) => {
                this.memberInfos = memberInfos;
                if (this.memberInfos && this.memberInfos.freelance) {
                    this.freelance = this.memberInfos.freelance;
                }
                this.fields = [];
                for (let field of this.freelance.fields) {
                    this.fields.push({
                        title: new FormControl(field.title),
                        description: new FormControl(field.description),
                        prix: new FormControl(field.prix),
                        temps: new FormControl(field.temps)
                    });
                }
                this.nameController = new FormControl(this.freelance.name);
                this.descriptionController = new FormControl(this.freelance.description);
            }
        });
    }

    public addField() {
        this.fields.push({
            title: new FormControl("Donnez un titre à votre compétence..."),
            description: new FormControl("Donnez une description précise de votre compétence..."),
            prix: new FormControl("Donnez un prix à votre compétence..."),
            temps: new FormControl("Donnez le temps nécessaire pour réalisé votre compétence...")
        });
    }

    public removeField(field: InputFieldData) {
        console.log("remove : " + field)
        console.log(this.fields.indexOf(field))
        this.fields.splice(this.fields.indexOf(field), 1);
    }

    public loading: boolean = false;
    public finish: boolean = false;
    public error: boolean = false;

    public save() {
        if (!this.loading) {
            this.loading = true;
            this.httpClient
                .post<FreelanceContent>('/data/freelances/set?code=' + this.memberService.code, {
                        name: this.nameController.value,
                        description: this.descriptionController.value,
                        fields: dataFieldToField(this.fields)
                    }
                ).subscribe({
                complete: () => {
                    this.loading = false;
                },
                next: (bol) => {
                    this.error = !bol;
                    this.finish = false;
                    if (bol) {
                        this.memberService.loadInfos();
                        this.finish = true;
                        setTimeout(() => {
                            this.finish = false;
                        }, 5000);
                    } else {
                        setTimeout(() => {
                            this.error = false;
                        }, 5000);
                    }
                },
                error: (error) => {
                    console.log('Problem : ' + error);
                }
            });
        }
    }


    public canBeSend(): boolean {
        if (this.nameController.value.length == 0 || this.nameController.value.length > 50)
            return false;
        if (this.descriptionController.value.length == 0 || this.descriptionController.value.length > 4096)
            return false;
        for (let field of this.fields)
            if (field.title.value.length == 0 || field.description.value.length == 0)
                return false;

        return true;
    }


}
