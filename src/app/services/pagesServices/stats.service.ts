import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Language, XpMember} from "../../components/pages/stats/stats";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StatsService {

    member_count$ = new BehaviorSubject<number | undefined>(undefined);

    languages$ = new BehaviorSubject<Language[] | undefined>(undefined);
    bigString$ = new BehaviorSubject<string>('');

    XpBoard$ = new BehaviorSubject<XpMember[] | undefined>(undefined);
    public loading$ = new BehaviorSubject<boolean>(false);
    public display_mode_button$ = new BehaviorSubject<string>("block;");


    constructor(private httpClient: HttpClient) {
    }

    update() {
        this.fetch_member_count();

        this.fetch_id_languages();

        this.fetch_xp();
    }

    fetch_member_count() {
        this.httpClient
            .get<number>('/data/stats/member_count' + this.languages_request)
            .subscribe(
                (response) => {
                    this.member_count$.next(response);
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }


    roles_id: string[] | undefined;
    languages_request: string = '';
    number: string = '1';

    fetch_id_languages() {
        this.httpClient
            .get<any[]>('/assets/data/languages.json')
            .subscribe(data => {

                    this.roles_id = data;

                    this.number = this.roles_id.length.toString();

                    let list_of_ids = this.roles_id.join('","');
                    this.languages_request = '?roles="' + list_of_ids + '"';

                    this.fetch_languages();
                }
            );
    }

    fetch_languages() {
        this.httpClient
            .get<any[]>('/data/stats/rolesCount_list' + this.languages_request)
            .subscribe(
                (response) => {
                    this.languages$.next(response);
                    this.bigger();
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

    big: number = 0;

    bigger() {
        if (this.languages$.getValue()) {
            // @ts-ignore
            for (var val of this.languages$.getValue())
                if (+(val.countMember) > this.big)
                    this.big = +(val.countMember);
            this.bigString$.next(this.big.toString());
        }
    }


    private number_fetch = 10;
    private load_per_click = 150;

    fetch_xp() {
        this.httpClient
            .get<any[]>('/data/stats/xp_list?start=0&end=' + this.number_fetch.toString())
            .subscribe(
                (response) => {
                    this.XpBoard$.next(response);
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

    /*
  To prevent multiple load !
   */

    more(): void {
        if (!this.loading$.getValue()) {
            this.loading$.next(true);
            this.httpClient
                .get<any[]>('/data/stats/xp_list?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_per_click).toString())
                .subscribe(
                    (response) => {
                        this.loading$.next(false);
                        if (this.XpBoard$.getValue()) {
                            // @ts-ignore
                            this.XpBoard$.next([...this.XpBoard$.getValue(), ...response]);
                            // @ts-ignore
                            if (this.number_fetch + this.load_per_click == this.XpBoard$.getValue().length)
                                { // @ts-ignore
                                    this.number_fetch = this.XpBoard$.getValue().length;
                                }
                            else {
                                this.display_mode_button$.next("none");
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
