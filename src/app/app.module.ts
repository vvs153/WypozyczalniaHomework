import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ListComponent } from './list/list.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    NavigatorComponent,
    FormularzComponent,
    ListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
