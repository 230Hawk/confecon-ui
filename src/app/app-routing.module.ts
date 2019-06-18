import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'cadastros', loadChildren: './cadastros/cadastros.module#CadastrosModule' },
  { path: 'home', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
