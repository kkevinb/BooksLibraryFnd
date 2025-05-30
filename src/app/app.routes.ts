import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AggiuntaLibroComponent } from './components/aggiunta-libro/aggiunta-libro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path:'', component:LoginComponent,canActivate:[LoginGuard]},
    {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
    {path:'libri/nuovo', component:AggiuntaLibroComponent, canActivate:[AuthGuard]},
    {path:'libri/:id', component:BookdetailsComponent, canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent, canActivate:[LoginGuard]},
    {path:'**', component:NotfoundComponent}
];
