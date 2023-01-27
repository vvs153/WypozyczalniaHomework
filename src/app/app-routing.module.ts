import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ListComponent} from "./list/list.component";
import {FormularzComponent} from "./formularz/formularz.component";



const routes: Routes = [
  {path: "",redirectTo: "home", pathMatch: "full"},
  {path: "home", component: MainPageComponent},
  {path: "lista_aut", component: ListComponent},
  {path: "formularz", component: FormularzComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
