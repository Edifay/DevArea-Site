import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebFreelancePreview} from "../../../models/WebFreelancePreview";

@Component({
    selector: 'app-freelances',
    templateUrl: './freelances.html',
    styleUrls: ['./freelances.scss']
})
export class Freelances implements OnInit {
    public freelances: WebFreelancePreview[] | undefined;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.load();
    }

    public load() {
        this.httpClient
            .get<WebFreelancePreview[]>('/data/freelances/preview?start=0&end=' + 60)
            .subscribe(
                (response) => {
                    this.freelances = response;
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

}
