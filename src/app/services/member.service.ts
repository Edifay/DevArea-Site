import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs';
import {MemberInfos} from '../models/member-infos';

@Injectable({
    providedIn: 'root'
})
export class MemberService {

    memberInfos$ = new BehaviorSubject<MemberInfos>(this.createMemberInfos());

    connected$ = new BehaviorSubject("connected");

    public code: string | undefined;

    constructor(private _cookieService: CookieService, private _httpClient: HttpClient) {
        this.loadInfos();
    }

    reset() {
        const memberInfos = this.createMemberInfos();
        this.memberInfos$.next(memberInfos);
        this.loadInfos();
    }

    loadInfos() {
        if (this._cookieService.get('codeDiscord')) {
            this.code = this._cookieService.get('codeDiscord');
            this._httpClient
                .get<MemberInfos>('/data/auth/get?code=' + this.code)
                .subscribe({
                    next: (response) => {
                        if (response == null) {
                            this._cookieService.delete('codeDiscord');
                            this.connected$.next("not_connected");
                        } else {
                            this.memberInfos$.next(response);
                            this.connected$.next("connected");
                        }
                    },
                    error: (err) => {
                        console.log('Error : ', err);
                    }
                });
        } else {
            this.connected$.next("not_connected");
        }
    }

    private createMemberInfos(): MemberInfos {
        return {
            id: '0',
            urlAvatar: '/assets/images/reseaux/discord.png',
            name: 'Disconnected',
            tag: 'Disconnected#0000',
            rank: 0,
            xp: 42,
            previous_xp_level: 0,
            next_xp_level: 0,
            level: 0,
            missions_list: [
                {
                    title: "Title",
                    id: "0",
                    lastUpdate: "0",
                    description: "Default description.",
                    avatarURL: "",
                    budget: "0",
                }
            ],
            badges: [
                {
                    description: "description",
                    name: "Nom du badge",
                    url_icon: "https://www.magimix.com/webroot-mobile/img/loading.gif"
                }
            ]
        }
    }

}
