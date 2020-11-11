import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations: [
    trigger('53_ani', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('0.2s')
      ]),
      transition('* => void', [
        animate('0.2s', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class DashBoardComponent implements OnInit {

  userName = '';
  sliderVisibleState = true;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private activatedRouter: ActivatedRoute) {

    const object = cookieService.getObject('user53');
    if (object !== undefined) {
      // @ts-ignore
      this.userName = object.name;
    } else {
      router.navigate(['']).then();
    }

  }

  public hideSlider() {
    // if (this.sliderVisibleState){
    //   this.sliderVisibleState = false;
    // }else{
    //   this.sliderVisibleState = true;
    // }

    // tslint:disable-next-line:no-unused-expression
    this.sliderVisibleState = !this.sliderVisibleState;
  }

  ngOnInit(): void {
    this.userName = this.activatedRouter.snapshot.paramMap.get('user');
  }

  signOut() {
    if (confirm('are you sure?')) {
      this.cookieService.remove('user53');
      this.router.navigate(['']).then();
    }
  }

}
