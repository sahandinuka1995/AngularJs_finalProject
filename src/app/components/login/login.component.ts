import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserAdminService} from '../../service/user-admin.service';
import AdminUserDTO from '../../dto/AdminUserDTO';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // sampleData = 'IJSE Institute';
  // // tslint:disable-next-line:typedef
  // setEmailData(value: any){
  //   this.sampleData = value.toString();
  // }

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private toastr: ToastrService,
    private adminUserService: UserAdminService
  ) {
    this.isLogged();
  }

  userEmail = '';
  userPassword = '';
  signUpEmail = '';
  signUpPassword = '';
  signUpName = '';
  signUpContact = '';

  userEmailErrorState = false;
  userPasswordErrorState = false;
  loading = false;

  signUpEmailErrorState = false;
  signUpPasswordErrorState = false;
  signUpNameErrorState = false;
  signUpContactErrorState = false;
  signUploading = false;

  // tslint:disable-next-line:typedef
  login() {

    if (this.userEmail.trim().length > 0) {
      this.userEmailErrorState = false;
    } else {
      this.userEmailErrorState = true;
      return;
    }

    if (this.userPassword.trim().length > 0) {
      this.userPasswordErrorState = false;
    } else {
      this.userPasswordErrorState = true;
      return;
    }

    this.adminUserService.loginUser(this.userEmail.trim(), this.userPassword.trim()).subscribe(result => {
      if (result.isFound === 'false') {
        this.onWarning(result);
        this.loading = true;
      }

      if (result.isFound === true) {
        const obj = JSON.parse(result.data);
        this.cookieService.putObject('user53', obj);

        this.onWarning('Login Success!');
        this.loading = true;

        this.router.navigate(['/dashboard', obj.name]).then();
      }
    });

    this.loading = false;
  }

  // tslint:disable-next-line:typedef
  signUp() {
    this.signUploading = true;

    const adminUser = new AdminUserDTO
    (
      this.signUpEmail.trim(),
      this.signUpPassword.trim(),
      this.signUpName.trim(),
      this.signUpContact.trim()
    );
    this.adminUserService.registerUser(adminUser).subscribe(response => {
      if (response.isRegistered === true) {
        this.onSuccess('Thank you!');
        this.signUploading = false;
      }
      if (response.isRegistered === 'Email Already Exist') {
        this.onWarning(response.isRegistered);
      }
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

  ngOnInit(): void {
  }

  private isLogged() {
    const tempUser = this.cookieService.getObject('user53');
    if (tempUser !== undefined) {
      // @ts-ignore
      this.router.navigate(['/dashboard', tempUser.name]).then();
    }
  }
}
