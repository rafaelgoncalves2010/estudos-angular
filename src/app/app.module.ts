import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material'


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { ROUTES } from './app.routes';
import { PrimeiraParteComponent } from './pages/cadastro-oficio/primeira-parte/primeira-parte.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    PrimeiraParteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
