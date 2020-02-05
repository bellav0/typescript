import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlthGuard implements CanActivate {

  constructor( public router: Router){

  }

  canActivate():Observable<boolean> | Promise<boolean> | boolean{
    return this.router.navigate(['/home'])
  }

    
}
