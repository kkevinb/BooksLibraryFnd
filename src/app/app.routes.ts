import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'libri/:id', component:BookdetailsComponent},
    {path:'**', component:NotfoundComponent}
];
