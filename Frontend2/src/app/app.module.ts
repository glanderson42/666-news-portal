import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatTableModule, MatSelectModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { IndexComponent } from './pages/index/index.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticleUpdateComponent } from './pages/article-update/article-update.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    IndexComponent,
    UsersComponent,
    CreateArticleComponent,
    NavbarComponent,
    ArticleDetailsComponent,
    ArticleUpdateComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
