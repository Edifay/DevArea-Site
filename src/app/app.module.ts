import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilInfoComponent } from './fil-info/fil-info.component';
import { HeaderComponent } from './header/header.component';
import { DescriptionComponent } from './description/description.component';
import { CommandsAvailableComponent } from './commands-available/commands-available.component';

@NgModule({
  declarations: [
    AppComponent,
    FilInfoComponent,
    HeaderComponent,
    DescriptionComponent,
    CommandsAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
