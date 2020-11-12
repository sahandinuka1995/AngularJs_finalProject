import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import CustomerDTO from '../dto/CustomerDTO';

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

  public saveCustomer(dto: CustomerDTO): Observable<any> {
    return this.http.post(this.url + 'customer/saveCustomer', {
      customerId: dto.customerId,
      customerName: dto.customerName,
      customerAddress: dto.customerAddress,
      customerSalary: dto.customerSalary
    });
  }

  // tslint:disable-next-line:typedef
  public getAllCustomers(pagination: number, page: number): Observable<any> {
    return this.http.get(this.url + 'customer/getAllCustomer?pagination=' + pagination + '&page=' + page);
  }

  public deleteCustomer(id): Observable<any> {
    return this.http.delete(this.url + 'customer/deleteCustomer ', {
      headers: {
        id
      }
    });
  }
}
