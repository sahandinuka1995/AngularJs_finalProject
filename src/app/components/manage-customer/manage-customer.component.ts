import {Component, OnInit} from '@angular/core';
import CustomerDTO from '../../dto/CustomerDTO';
import {CustomerService} from '../../service/customer.service';
import {ToastrService} from 'ngx-toastr';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.scss']
})
export class ManageCustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService) {
  }

  txtCusId = '';
  txtCusName = '';
  txtCusAddress = '';
  txtCusSalary = 0;

  loading = false;

  resultCount = 0;
  pageSize = 20;
  pageSizeOption: number[] = [1, 20, 25, 50];
  pageEvent: PageEvent;

  myDataSet: CustomerDTO[] = [];

  selectedCustomer: CustomerDTO = null;

  ngOnInit(): void {
    this.loadAllCustomers(10, 1);
  }

  // tslint:disable-next-line:typedef
  saveCustomer() {
    const cus = new CustomerDTO(this.txtCusId.trim(), this.txtCusName.trim(), this.txtCusAddress.trim(), this.txtCusSalary);
    this.customerService.saveCustomer(cus).subscribe(result => {
      if (result.isSaved) {
        this.onSuccess('Customer Saved!');
        this.loadAllCustomers(10, 1);
      } else {
        this.onError('Try again!');
      }
    });
  }

  // tslint:disable-next-line:typedef
  loadAllCustomers(pagination: number, page: number) {
    this.loading = true;
    this.customerService.getAllCustomers(pagination, page).subscribe(result => {
      console.log(result);
      this.myDataSet = result.data;
      this.resultCount = result.count;
      this.loading = false;
    });
  }

  // tslint:disable-next-line:typedef
  onWarning(message: string) {
    this.toastr.warning(message, 'Warning', {
      timeOut: 300
    });
  }

  // tslint:disable-next-line:typedef
  onError(message: string) {
    this.toastr.warning(message, 'Error');
  }

  // tslint:disable-next-line:typedef
  onInfo(message: string) {
    this.toastr.warning(message, 'Info');
  }

  // tslint:disable-next-line:typedef
  onSuccess(message: string) {
    this.toastr.warning(message, 'Success');
  }

  // tslint:disable-next-line:typedef
  getServerData(event?: PageEvent) {
    this.loadAllCustomers(event.pageSize, event.pageIndex);
  }

  // tslint:disable-next-line:typedef
  deleteCustomer(customerId: string) {
    if (confirm('Are you sure?')) {
      this.customerService.deleteCustomer(customerId).subscribe(result => {
        if (result.isDeleted) {
          this.loadAllCustomers(10, 1);
          this.onSuccess('Deleted!');
        } else {
          this.onError('Try Again');
        }
      });
    }
  }

  // tslint:disable-next-line:typedef
  selectCustomer(tempCustomer: CustomerDTO) {
    this.selectedCustomer = tempCustomer;
  }
}
