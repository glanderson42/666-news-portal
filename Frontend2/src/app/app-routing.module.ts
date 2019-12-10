import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleUpdateComponent } from './pages/article-update/article-update.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'createArticle', component: CreateArticleComponent, canActivate: [AuthGuard]},
  { path: 'article-details/:id', component: ArticleDetailsComponent},
  { path: 'article-update/:id', component: ArticleUpdateComponent},
  { path: 'register', component: UserCreateComponent},
  // { path: 'my-reservations', component: ReservationListPageComponent, canActivate: [AuthGuard] },
  // { path: 'new-reservation/:id', component: NewReservationPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
