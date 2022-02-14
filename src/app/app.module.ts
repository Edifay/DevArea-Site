import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilInfoComponent} from './components/pages/menu/fil-info/fil-info.component';
import {HeaderComponent} from './components/global/header/header.component';
import {DescriptionComponent} from './components/pages/menu/description/description.component';
import {CommandsAvailableComponent} from './components/pages/menu/commands-available/commands-available.component';
import {MenuComponent} from './components/base/menu/menu.component';
import {MissionsComponent} from './components/base/missions/missions.component';
import {StaffComponent} from './components/base/staff/staff.component';
import {StatsComponent} from './components/base/stats/stats.component';
import {ReseauxComponent} from './components/base/reseaux/reseaux.component';
import {NotFoundComponent} from './components/base/not-found/not-found.component';
import {StaffCardComponent} from './components/pages/staff/staff-card/staff-card.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LanguagesSticksComponent} from './components/pages/stats/languages-sticks/languages-sticks.component';
import {XpTopRankComponent} from './components/pages/stats/xp-top-rank/xp-top-rank.component';
import {ConnexionComponent} from './components/base/connexion/connexion.component';
import {ConnexionButtonComponent} from './components/global/connexion-button/connexion-button.component';
import { MissionCardComponent } from './components/pages/missions/mission-card/mission-card.component';

const appRoutes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: '', component: MenuComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'reseaux', component: ReseauxComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'missions', component: MissionsComponent},
  {path: 'connexion', component: ConnexionComponent},
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
    ConnexionComponent,
    ConnexionButtonComponent,
    MissionCardComponent
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
