import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  constructor(
    private cookieService: CookieService
  ) {
  }

  public isExists(): boolean {
    const object = this.cookieService.getObject('user53');
    if (object !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}
