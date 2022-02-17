import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilInfoComponent} from './components/pages/menu/components/fil-info/fil-info.component';
import {HeaderComponent} from './components/global/header/header.component';
import {DescriptionComponent} from './components/pages/menu/components/description/description.component';
import {CommandsAvailableComponent} from './components/pages/menu/components/commands-available/commands-available.component';
import {MenuComponent} from './components/pages/menu/menu.component';
import {MissionsComponent} from './components/pages/missions/missions.component';
import {StaffComponent} from './components/pages/staff/staff.component';
import {StatsComponent} from './components/pages/stats/stats.component';
import {ReseauxComponent} from './components/pages/reseaux/reseaux.component';
import {NotFoundComponent} from './components/pages/not-found/not-found.component';
import {StaffCardComponent} from './components/pages/staff/components/staff-card/staff-card.component';
import {HttpClientModule} from "@angular/common/http";
import {LanguagesSticksComponent} from './components/pages/stats/components/languages-sticks/languages-sticks.component';
import {XpTopRankComponent} from './components/pages/stats/components/xp-top-rank/xp-top-rank.component';
import {ConnexionButtonComponent} from './components/global/connexion-button/connexion-button.component';
import { MissionCardComponent } from './components/pages/missions/components/mission-card/mission-card.component';
import { OptionsComponent } from './components/pages/options/options.component';
import { PersonnalXpComponent } from './components/pages/options/components/personnal-xp/personnal-xp.component';
import { BadgesCardComponent } from './components/pages/options/components/badges-card/badges-card.component';
import { BadgeComponent } from './components/pages/options/components/badge/badge.component';

const appRoutes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: '', component: MenuComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'reseaux', component: ReseauxComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'missions', component: MissionsComponent},
  {path: 'options', component: OptionsComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FilInfoComponent,
    HeaderComponent,
    DescriptionComponent,
    CommandsAvailableComponent,
    MenuComponent,
    MissionsComponent,
    StaffComponent,
    StatsComponent,
    ReseauxComponent,
    NotFoundComponent,
    StaffCardComponent,
    LanguagesSticksComponent,
    XpTopRankComponent,
    ConnexionButtonComponent,
    MissionCardComponent,
    OptionsComponent,
    PersonnalXpComponent,
    BadgesCardComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
