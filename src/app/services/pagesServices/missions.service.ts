import {Injectable} from '@angular/core';
import {MissionPreview} from "../../models/missionPreview";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MissionsService {

    missions_list$ = new BehaviorSubject<MissionPreview[] | undefined>(undefined);
    public loading$ = new BehaviorSubject<boolean>(false);
    public end$ = new BehaviorSubject<boolean>(false);

    constructor(private httpClient: HttpClient) {
    }

    update() {
        this.fetch_mission();
    }

    private number_fetch: number = 10;
    private load_on_more: number = 10;

    fetch_mission(): void {
        this.loading$.next(true);
        this.httpClient
            .get<MissionPreview[]>('/data/missions/preview?start=0&end=' + this.number_fetch)
            .subscribe(
                (response) => {
                    this.missions_list$.next(response);
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
                .get<MissionPreview[]>('/data/missions/preview?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_on_more).toString())
                .subscribe(
                    (response) => {
                        if (this.missions_list$.getValue()) {

                            this.missions_list$.next([...this.missions_list$.getValue()!, ...response]);
                            this.loading$.next(false);
                            if (this.number_fetch + this.load_on_more == this.missions_list$.getValue()!.length) {
                                this.number_fetch = this.missions_list$.getValue()!.length;
                                this.end$.next(false);
                            } else {
                                this.number_fetch = this.missions_list$.getValue()!.length;
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
