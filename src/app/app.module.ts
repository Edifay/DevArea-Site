import {NgModule, SecurityContext} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


import {AppRoutingModule} from './app-routing.module';
import {App} from './mainComponent/app';
import {Header} from './components/global/header/header';
import {Footer} from './components/global/footer/footer';
import {ThemeSwitcher} from './components/global/theme-switcher/theme-switcher';
import {Loader} from './components/global/loader/loader';

import {FilInfo} from './components/pages/menu/components/fil-info/fil-info';
import {Description} from './components/pages/menu/components/description/description';
import {CommandsAvailable} from './components/pages/menu/components/commands-available/commands-available';
import {Menu} from './components/pages/menu/menu';
import {Missions} from './components/pages/missions/missions';
import {Staff} from './components/pages/staff/staff';
import {Stats} from './components/pages/stats/stats';
import {Reseaux} from './components/pages/reseaux/reseaux';
import {NotFound} from './components/pages/not-found/not-found';
import {StaffCard} from './components/pages/staff/components/staff-card/staff-card';
import {LanguagesSticks} from './components/pages/stats/components/languages-sticks/languages-sticks';
import {XpTopRank} from './components/pages/stats/components/xp-top-rank/xp-top-rank';
import {ConnexionButton} from './components/global/connexion-button/connexion-button';
import {Options} from './components/pages/options/options';
import {PersonnalXp} from './components/pages/options/components/personnal-xp/personnal-xp';
import {BadgesCard} from './components/pages/options/components/badges-card/badges-card';
import {Badge} from './components/pages/options/components/badge/badge';
import {HowConnect} from './components/pages/how-connect/how-connect';
import {ToDo} from './components/pages/to-do/to-do';
import {MissionCreator} from './components/pages/mission-creator/mission-creator';
import {MissionPreview} from './components/pages/missions/components/mission-preview/mission-preview';
import {Mission} from './components/pages/mission/mission';
import {MemberProfileComponent} from './components/pages/member-profile/member-profile';
import {PresentationCard} from './components/pages/options/components/presentation-card/presentation-card';
import {MissionsWiewer} from './components/pages/options/components/missions-wiewer/missions-wiewer';
import {FreelanceWiewer} from './components/pages/options/components/freelance-wiewer/freelance-wiewer';
import {Field} from './components/pages/options/components/freelance-wiewer/components/field/field';
import {Freelances} from './components/pages/freelances/freelances';
import {FreelanceCreator} from './components/pages/freelance-creator/freelance-creator';
import {FreelancePreview} from './components/pages/freelances/components/freelance-preview/freelance-preview';
import {InputField} from './components/pages/freelance-creator/components/input-field/input-field';
import {Customisation} from './components/pages/customisation/customisation';
import {TypesDescription} from './components/pages/menu/components/types-description/types-description';
import {JoinDevArea} from "./components/pages/menu/components/join-dev-area/join-dev-area";
import {MarkdownModule} from "ngx-markdown";
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AvisCard } from './components/pages/options/components/avis-card/avis-card';

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
        FreelanceCreator,
        FreelancePreview,
        InputField,
        Customisation,
        Footer,
        TypesDescription,
        JoinDevArea,
        AvisCard,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot({loader: HttpClient, sanitize: SecurityContext.HTML}),
        NgOptimizedImage,
    ],
    providers: [
        CookieService
    ],
    bootstrap: [App]
})
export class AppModule {
}
