import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from "./components/pages/menu/menu.component";
import {StatsComponent} from "./components/pages/stats/stats.component";
import {ReseauxComponent} from "./components/pages/reseaux/reseaux.component";
import {StaffComponent} from "./components/pages/staff/staff.component";
import {MissionsComponent} from "./components/pages/missions/missions.component";
import {OptionsComponent} from "./components/pages/options/options.component";
import {HowConnectComponent} from "./components/pages/how-connect/how-connect.component";
import {ToDoComponent} from "./components/pages/to-do/to-do.component";
import {MissionCreatorComponent} from "./components/pages/mission-creator/mission-creator.component";
import {Mission} from "./components/pages/mission/mission";
import {NotFoundComponent} from "./components/pages/not-found/not-found.component";

const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: '', component: MenuComponent},
    {path: 'stats', component: StatsComponent},
    {path: 'reseaux', component: ReseauxComponent},
    {path: 'staff', component: StaffComponent},
    {path: 'missions', component: MissionsComponent},
    {path: 'options', component: OptionsComponent},
    {path: 'how-connect', component: HowConnectComponent},
    {path: 'to-do', component: ToDoComponent},
    {path: 'mission-creator', component: MissionCreatorComponent},
    {path: 'mission', component: Mission},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
