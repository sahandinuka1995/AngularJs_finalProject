import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {ManageUserService} from './service/manage-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private manageUserService: ManageUserService
  ) {
  }

  canActivate(): boolean {
    if (this.manageUserService.isExists()) {
      return true;
    } else {
      this.router.navigate(['/']).then();
      return false;
    }
  }

}
