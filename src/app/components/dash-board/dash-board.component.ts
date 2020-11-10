import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations: [
    trigger('53_ani', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('1s')
      ]),
      transition('* => void', [
        animate('1s', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class DashBoardComponent implements OnInit {

  userName = '';
  sliderVisibleState = true;

  constructor(private activatedRouter: ActivatedRoute) {
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

}
