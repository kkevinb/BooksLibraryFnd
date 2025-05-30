import { Component, inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../Models/AuthToken';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  constructor(private authService : AuthService,private router : Router) { }
   title = inject(AppComponent).title;
   islogged = !!localStorage.getItem('token');
   ReturnHome(){
     this.router.navigate(['/home']);
   }
   AddBook(){
     this.router.navigate(['/libri/nuovo']);
   }
   goToLogin(){
     this.router.navigate(['/login']);
   }
   logout(){
    this.authService.logout().subscribe({
      next: () => {
        this.islogged = false; // aggiorna subito lo stato
        this.router.navigate(['/login']);
      },
      error: () => {
        this.islogged = false;
        this.router.navigate(['/login']);
      }
    });
   }
   getName(){
     return this.authService.getNameFromToken();
   }
}
