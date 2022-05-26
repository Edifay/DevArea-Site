import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';


import {AppRoutingModule} from './app-routing.module';
import {App} from './mainComponent/app';
import {FilInfo} from './components/pages/menu/components/fil-info/fil-info';
import {Header} from './components/global/header/header';
import {Description} from './components/pages/menu/components/description/description';
import {
    CommandsAvailable
} from './components/pages/menu/components/commands-available/commands-available';
import {Menu} from './components/pages/menu/menu';
import {Missions} from './components/pages/missions/missions';
import {Staff} from './components/pages/staff/staff';
import {Stats} from './components/pages/stats/stats';
import {Reseaux} from './components/pages/reseaux/reseaux';
import {NotFound} from './components/pages/not-found/not-found';
import {StaffCard} from './components/pages/staff/components/staff-card/staff-card';
import {HttpClientModule} from "@angular/common/http";
import {
    LanguagesSticks
} from './components/pages/stats/components/languages-sticks/languages-sticks';
import {XpTopRank} from './components/pages/stats/components/xp-top-rank/xp-top-rank';
import {ConnexionButton} from './components/global/connexion-button/connexion-button';
import {Options} from './components/pages/options/options';
import {PersonnalXp} from './components/pages/options/components/personnal-xp/personnal-xp';
import {BadgesCard} from './components/pages/options/components/badges-card/badges-card';
import {Badge} from './components/pages/options/components/badge/badge';
import {ThemeSwitcher} from './components/global/theme-switcher/theme-switcher';
import {HowConnect} from './components/pages/how-connect/how-connect';
import {ToDo} from './components/pages/to-do/to-do';
import {MissionCreator} from './components/pages/mission-creator/mission-creator';
import {ReactiveFormsModule} from "@angular/forms";
import {
    MissionPreview
} from './components/pages/missions/components/mission-preview/mission-preview';
import {Mission} from './components/pages/mission/mission';
import { MemberProfileComponent } from './components/pages/member-profile/member-profile';
import { PresentationCard } from './components/pages/options/components/presentation-card/presentation-card';
import { Loader } from './components/global/loader/loader';
import { MissionsWiewer } from './components/pages/options/components/missions-wiewer/missions-wiewer';
import { FreelanceWiewer } from './components/pages/options/components/freelance-wiewer/freelance-wiewer';
import { Field } from './components/pages/options/components/freelance-wiewer/components/field/field';
import { Freelances } from './components/pages/freelances/freelances';
import { FreelanceCreatorComponent } from './components/pages/freelance-creator/freelance-creator.component';
import { FreelancePreview } from './components/pages/freelances/components/freelance-preview/freelance-preview';

@NgModule({
    declarations: [
        App,
        FilInfo,
        Header,
        Description,
        CommandsAvailable,
        Menu,
        Missions,
        Staff,
        Stats,
        Reseaux,
        NotFound,
        StaffCard,
        LanguagesSticks,
        XpTopRank,
        ConnexionButton,
        Options,
        PersonnalXp,
        BadgesCard,
        Badge,
        ThemeSwitcher,
        HowConnect,
        ToDo,
        MissionCreator,
        MissionPreview,
        Mission,
        MemberProfileComponent,
        PresentationCard,
        Loader,
        MissionsWiewer,
        FreelanceWiewer,
        Field,
        Freelances,
        FreelanceCreatorComponent,
        FreelancePreview,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [
        CookieService
    ],
    bootstrap: [App]
})
export class AppModule {
}
