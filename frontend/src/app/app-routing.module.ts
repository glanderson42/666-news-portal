import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { IndexComponent } from './index/index.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'articles',
    component: ArticleListComponent
  },
  {
    path: 'article/:id',
    component: ArticleViewComponent
  },
  {
    path: 'registration',
    component: UserRegistrationComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
