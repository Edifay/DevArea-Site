import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebFreelancePreview} from "../../models/WebFreelancePreview";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FreelancesService {

    public freelances$ = new BehaviorSubject<WebFreelancePreview[] | undefined>(undefined);
    public loading$ = new BehaviorSubject<boolean>(false);
    public end$ = new BehaviorSubject<boolean>(false);

    constructor(private httpClient: HttpClient) {
    }

    update() {
        this.load();
    }


    private number_fetch: number = 10;
    private load_on_more: number = 10;

    public load() {
        this.loading$.next(true);
        this.httpClient
            .get<WebFreelancePreview[]>('/data/freelances/preview?start=0&end=' + this.number_fetch)
            .subscribe(
                (response) => {
                    this.freelances$.next(response);
                    this.loading$.next(false);
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }


    fetch_more(): void {
        if (!this.loading$.getValue() && !this.end$.getValue()) {
            this.loading$.next(true);
            this.httpClient
                .get<WebFreelancePreview[]>('/data/freelances/preview?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_on_more).toString())
                .subscribe(
                    (response) => {
                        if (this.freelances$.getValue() != undefined) {
                            this.freelances$.next([...this.freelances$.getValue()!, ...response]);
                            this.loading$.next(false);
                            if (this.number_fetch + this.load_on_more == this.freelances$.getValue()!.length) {
                                this.number_fetch = this.freelances$.getValue()!.length;
                                this.end$.next(false);
                            } else {
                                this.number_fetch = this.freelances$.getValue()!.length;
                                this.end$.next(true);
                            }
                        }
                    },
                    (error) => {
                        console.log('Error : ', error);
                    }
                );
        }
    }

}
