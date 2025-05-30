import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../Models/AuthToken";

/*TODO: Aggiungere tutti gli import necessari*/
export const AuthGuard: CanActivateFn = (route, state) => {  
  const authService = inject(AuthService);
  const router = inject(Router);
  if(!authService.isLogged())
  {
      router.navigate(['/login']);
      return false;
  }
  return true;
};