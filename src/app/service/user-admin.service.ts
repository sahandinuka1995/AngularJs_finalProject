import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import AdminUserDTO from '../dto/AdminUserDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  url = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  public registerUser(userDTO: AdminUserDTO): Observable<any> {
    return this.http.post(this.url + 'adminUser/createAccount', {
      userEmail: userDTO.email,
      userPassword: userDTO.password,
      userName: userDTO.name,
      userContact: userDTO.contact
    });
  }

  public loginUser(email: string, password: string): Observable<any> {
    return this.http.get(this.url + 'adminUser/loginAccount', {
      headers: {
        email,
        password
      }
    });
  }
}
