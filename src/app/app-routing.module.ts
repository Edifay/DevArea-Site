import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Menu} from "./components/pages/menu/menu";
import {Customisation} from "./components/pages/customisation/customisation";
import {Stats} from "./components/pages/stats/stats";
import {Reseaux} from "./components/pages/reseaux/reseaux";
import {Staff} from "./components/pages/staff/staff";
import {Missions} from "./components/pages/missions/missions";
import {Options} from "./components/pages/options/options";
import {HowConnect} from "./components/pages/how-connect/how-connect";
import {ToDo} from "./components/pages/to-do/to-do";
import {MissionCreator} from "./components/pages/mission-creator/mission-creator";
import {Mission} from "./components/pages/mission/mission";
import {NotFound} from "./components/pages/not-found/not-found";
import {MemberProfileComponent} from "./components/pages/member-profile/member-profile";
import {Freelances} from "./components/pages/freelances/freelances";
import {FreelanceCreator} from "./components/pages/freelance-creator/freelance-creator";
import {ChallengesComponent} from "./components/pages/challenges/challenges";
import {ChallengesDownload} from "./components/pages/challenges-download/challenges-download";

const routes: Routes = [
    {path: 'menu', component: Menu},
    {path: '', component: Menu},
    {path: 'stats', component: Stats},
    {path: 'reseaux', component: Reseaux},
    {path: 'customisation', component: Customisation},
    {path: 'staff', component: Staff},
    {path: 'missions', component: Missions},
    {path: 'options', component: Options},
    {path: 'how-connect', component: HowConnect},
    {path: 'to-do', component: ToDo},
    {path: 'mission-creator', component: MissionCreator},
    {path: 'mission', component: Mission},
    {path: 'member-profile', component: MemberProfileComponent},
    {path: 'freelances', component: Freelances},
    {path: 'freelance-creator', component: FreelanceCreator},
    {path: 'challenges', component: ChallengesComponent},
    {path: 'challenges/download', component: ChallengesDownload},
    {path: '**', component: NotFound}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
