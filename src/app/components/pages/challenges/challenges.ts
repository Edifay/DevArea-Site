import {Component, OnDestroy, OnInit} from '@angular/core';
import {smoothAppear} from "../../../animations/smoothAppear";
import {WebValidatedChallengeCard} from "../../../models/WebValidatedChallengeCard";
import {ChallengesService} from "../../../services/pagesServices/challenges.service";
import 'leader-line';
import {MemberService} from "../../../services/member.service";
import {MemberInfos} from "../../../models/member-infos";
import {Router} from "@angular/router";
import {LinesService} from "../../../services/pagesServices/lines.service";
import {HttpClient} from "@angular/common/http";

declare let LeaderLine: any;

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.html',
    styleUrls: ['./challenges.scss'],
    animations: [smoothAppear]
})
export class ChallengesComponent implements OnInit, OnDestroy {
    public static mainColor: string = '#FD654EFF';

    public challengeActivity: WebValidatedChallengeCard[] | undefined;

    public map: Map<string, string[]> = new Map();
    public mapLevel: Map<string, number> = new Map();

    public isConnected: string = "connected";
    public memberInfo: MemberInfos | undefined;

    private static arrowStyle = {
        color: ChallengesComponent.mainColor,
        startPlugColor: 'rgb(255, 148, 26)', gradient: true,
        endPlug: 'arrow2',
    };

    constructor(public linesServices: LinesService, public challengeService: ChallengesService, public memberService: MemberService, private router: Router, public httpClient: HttpClient) {
        this.challengeService.challengeActivity$.subscribe(value => this.challengeActivity = value);
        this.challengeService.map$.subscribe(value => this.buildMap(value));

        this.memberService.connected$.subscribe(value => this.isConnected = value);
        this.memberService.memberInfos$.subscribe(value => this.memberInfo = value);
        /*
                router.events.subscribe(
                    (event) => {
                        if (event instanceof NavigationEnd) {
                            this.linesServices.destroyAll();
                        }
                    });*/
    }

    ngOnDestroy(): void {
        this.linesServices.destroyAll();
    }

    ngOnInit(): void {
        this.challengeService.update();
    }


    /**
     * We admit that every dependencies tree is right.
     * @param map
     */
    buildMap(map: Map<string, string[]> | undefined): void {
        if (JSON.stringify(map) === JSON.stringify(this.map) && this.linesServices.lines.size != 0)
            return;

        if (map == undefined)
            return;

        this.map = map;

        let cloned = structuredClone(map);

        while (cloned.size != 0) { // Determining the level of each challenge. By adding 1 level to his higher dependency challenge.
            let atRemove: String[] = [];

            for (let entry of cloned.entries()) {
                let unDeclaredDependencyFound = false;
                let level = -1;

                for (let dependency of entry[1]) {
                    if (!this.mapLevel.has(dependency))
                        unDeclaredDependencyFound = true;
                    else if (this.mapLevel.get(dependency)! > level)
                        level = this.mapLevel.get(dependency)!;
                }

                if (!unDeclaredDependencyFound) {
                    this.mapLevel.set(entry[0], ++level);
                    atRemove.push(entry[0]);
                }

            }

            for (let ele of atRemove)
                cloned.delete(ele);
        }

        setTimeout((): void => {
            map.forEach((dependencies, challenge) => {
                if (dependencies.length == 0) {
                    let line = new LeaderLine(
                        LeaderLine.pointAnchor(document.getElementById(challenge), {x: '50%', y: -30}),
                        LeaderLine.pointAnchor(document.getElementById(challenge), {x: '50%', y: 0}),
                        ChallengesComponent.arrowStyle
                    );
                    line.path = 'straight';
                    this.linesServices.set(challenge + challenge, line);
                }

                dependencies.forEach(
                    (dependency: string): void => {
                        let line = new LeaderLine(
                            LeaderLine.pointAnchor(document.getElementById(dependency), {x: '50%', y: '100%'}),
                            LeaderLine.pointAnchor(document.getElementById(challenge), {x: '50%', y: 0}),
                            ChallengesComponent.arrowStyle
                        );
                        line.path = 'straight';
                        this.linesServices.set(dependency + challenge, line);
                    }
                )
            })
        }, 100);
    }

    isHoveringPopup: boolean = false;

    currentClicked: string = "";
    currentPopupText: string = "";

    click(challenge: string): void {
        this.currentPopupText = "";
        this.currentClicked = challenge;
        this.httpClient
            .get<string[]>('/data/challenges/load_message_challenge?challenge=' + challenge)
            .subscribe(
                (response) => {
                    this.currentPopupText = response[0];
                },
                (error) => {
                    console.log(error);
                    console.log('Problem : ' + error);
                }
            )
    }

    enterReq(challenge: string): void {
        if (this.map.get(challenge)?.length == 0) {
            this.linesServices.lines.get(challenge + challenge).show("draw");
            this.linesServices.lines.get(challenge + challenge).setOptions({endPlugColor: ChallengesComponent.mainColor});
        }

        this.map.get(challenge)?.forEach((dependency: string) => {
            this.linesServices.lines.get(dependency + challenge).show("draw");
            this.linesServices.lines.get(dependency + challenge).setOptions({endPlugColor: ChallengesComponent.mainColor});
            this.enterReq(dependency);
        });
    }

    enter(challenge: string): void {
        this.linesServices.lines.forEach(value => {
            value.hide("draw")
            value.setOptions({endPlugColor: 'rgba(0,0,0,0)'});
        });

        this.enterReq(challenge);
    }

    enterInPopup() {
        this.isHoveringPopup = true;
    }

    leavePopup(): void {
        this.isHoveringPopup = false;
        this.currentClicked = "";
        this.currentPopupText = "";
    }

    leave(challenge: string): void {
        /*if (this.currentClicked === challenge) {
            setTimeout(() => {
                if (!this.isHoveringPopup) {
                    this.currentClicked = "";
                    this.currentPopupText = "";
                }
            }, 20)
        }*/

        this.linesServices.lines.forEach(value => {
            value.show("draw");
            value.setOptions({endPlugColor: ChallengesComponent.mainColor});
        });
    }

    getChallengeStatus(challenge: string): string {
        if (this.isConnected === "not_connected")
            return "🔒";

        if (this.memberInfo?.challengesAccomplished == undefined)
            return "🔒";

        let contain = false;
        this.memberInfo.challengesAccomplished.forEach(challengeAccomplished => {
            if (challengeAccomplished.name == challenge)
                contain = true;
        });

        if (contain)
            return "";

        let unlocked: boolean = true;
        this.map.get(challenge)?.forEach((dependency: string): void => {
            contain = false;
            this.memberInfo!.challengesAccomplished.forEach(challengeAccomplished => {
                if (challengeAccomplished.name == dependency)
                    contain = true;
            });
            if (!contain)
                unlocked = false;
        })

        if (unlocked)
            return "🔓";
        else
            return "🔒";
    }

    eachLevel() {
        let levelMax = 0;
        this.mapLevel.forEach(value => {
            if (value > levelMax)
                levelMax = value;
        });
        let numbers = Array(levelMax + 1).fill(0).map((x, i) => i);
        return numbers;
    }

    getChallengesOfLevel(level: number) {
        let challenges: string[] = [];

        this.mapLevel.forEach((value, key) => {
            if (value == level)
                challenges.push(key);
        });

        return challenges;
    }


    transform(value: any, args?: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals: { [key: string]: number } = {
                'ans': 31536000,
                'mois': 2592000,
                'semaine': 604800,
                'jour': 86400,
                'heure': 3600,
                'minute': 60,
                'seconde': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i;
                    } else {
                        return counter + ' ' + i + 's';
                    }
            }
        }
        return value;
    }

}
