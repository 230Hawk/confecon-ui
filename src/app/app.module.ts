import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCadastrosModule } from './cadastros/app.cadastros.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AppCadastrosModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
