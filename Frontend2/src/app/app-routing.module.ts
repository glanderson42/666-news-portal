import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  // { path: 'my-reservations', component: ReservationListPageComponent, canActivate: [AuthGuard] },
  // { path: 'new-reservation/:id', component: NewReservationPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
