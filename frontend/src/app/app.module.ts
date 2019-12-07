import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { IndexComponent } from './index/index.component';
import { ArticleCreateComponent } from './article-create/article-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    UserRegistrationComponent,
    ArticleViewComponent,
    UserLoginComponent,
    IndexComponent,
    ArticleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
