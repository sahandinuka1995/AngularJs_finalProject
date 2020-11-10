import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  public getChartData(): Observable<any> {
    return this.http.get(this.url + 'customer/getChartData');
  }
}
