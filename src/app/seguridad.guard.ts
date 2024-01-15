import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class seguridadGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const access_token = this.cookieService.get('access_token');
    
    if (access_token) {
      // Si la cookie existe, verifique si ha expirado
      const expirationDate = new Date(this.cookieService.get('access_token_expires'));
      const isExpired = expirationDate.getTime() < new Date().getTime();

      if (isExpired) {
        // Si la cookie ha expirado, redirige a la página de inicio de sesión
        this.router.navigate(['login']);
        return false;
      }

      // La cookie no ha expirado, el usuario puede acceder
      return true;
    } else {
      // Si no hay cookie, redirige a la página de inicio de sesión
      this.router.navigate(['login']);
      return false;
    }
  }
}
