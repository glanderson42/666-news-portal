import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'createArticle', component: CreateArticleComponent, canActivate: [AuthGuard]},
  // { path: 'index', component: IndexComponent},
  // { path: 'my-reservations', component: ReservationListPageComponent, canActivate: [AuthGuard] },
  // { path: 'new-reservation/:id', component: NewReservationPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
