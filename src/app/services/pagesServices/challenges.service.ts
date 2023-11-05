import {Injectable} from '@angular/core';
import {WebValidatedChallengeCard} from "../../models/WebValidatedChallengeCard";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {staffCard} from "../../components/pages/staff/staff";

@Injectable({
    providedIn: 'root'
})
export class ChallengesService {
    public challengeActivity$ = new BehaviorSubject<WebValidatedChallengeCard[] | undefined>(undefined);
    public map$ = new BehaviorSubject<Map<string, string[]> | undefined>(undefined);

    constructor(private httpClient: HttpClient) {
    }

    update() {
        this.getActivity();
        this.getMap();
    }

    getActivity() {
        this.httpClient
            .get<WebValidatedChallengeCard[]>('/data/challenges/activity')
            .subscribe(
                (response) => {
                    this.challengeActivity$.next(response);
                },
                (error) => {
                    console.log('Problem : ' + error);
                }
            )

    }

    getMap() {
        this.httpClient
            .get<any>('/data/challenges/map')
            .subscribe(
                (response) => {
                    let map = new Map<string, string[]>;

                    for (var value in response)
                        map.set(value, response[value]);

                     this.map$.next(map);
                },
                (error) => {
                    console.log('Problem : ' + error);
                }
            )
    }
}
