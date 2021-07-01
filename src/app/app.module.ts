import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilInfoComponent } from './components/include/fil-info/fil-info.component';
import { HeaderComponent } from './components/include/header/header.component';
import { DescriptionComponent } from './components/include/description/description.component';
import { CommandsAvailableComponent } from './components/include/commands-available/commands-available.component';
import { MenuComponent } from './components/base/menu/menu.component';
import { MissionsComponent } from './components/base/missions/missions.component';
import { StaffComponent } from './components/base/staff/staff.component';
import { StatsComponent } from './components/base/stats/stats.component';
import { ReseauxComponent } from './components/base/reseaux/reseaux.component';
import { NotFoundComponent } from './components/base/not-found/not-found.component';
import { StaffCardComponent } from './components/include/staff-card/staff-card.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
const appRoutes: Routes =[
  {path:'menu', component:MenuComponent},
  {path: '', component: MenuComponent},
  {path: 'stats', component: StatsComponent},
  {path:'reseaux', component: ReseauxComponent},
  {path: 'staff', component: StaffComponent},
  {path:'missions', component: MissionsComponent},
  {path:'**',component: NotFoundComponent}
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
    StaffCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
