import { inject, Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Models/AuthToken';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private authService: AuthService,private router: Router) 
  { }
  login() {
  this.authService.login(this.username, this.password).subscribe({
    next: () => {
      this.router.navigate(['/home']);
    },
    error: () => {
      alert('Credenziali non valide. Riprova.');
    }
  });
}
}
