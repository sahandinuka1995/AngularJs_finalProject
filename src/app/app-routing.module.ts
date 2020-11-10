import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashBoardComponent} from './components/dash-board/dash-board.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: 'dashboard/:user', component: DashBoardComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
