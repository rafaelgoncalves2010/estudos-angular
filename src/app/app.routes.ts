import {Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { PrimeiraParteComponent } from './pages/cadastro-oficio/primeira-parte/primeira-parte.component'


export const ROUTES: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro-autorizacao', component: PrimeiraParteComponent},
]