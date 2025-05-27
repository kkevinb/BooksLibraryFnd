import { Component, inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  constructor(private router : Router) { }
   title = inject(AppComponent).title;
   ReturnHome(){
     this.router.navigate(['/']);
   }
}
