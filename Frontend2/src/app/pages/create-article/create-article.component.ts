import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Article } from 'src/app/models/Article';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });

  newArticle: Article;
  userName: User;
  today =  new Date(Date.now());

  constructor(
    private articleService: ArticleService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.userName = this.authService.user;
    }
  }

  get name() {
    return this.articleForm.get('name');
  }
  get summary() {
    return this.articleForm.get('summary');
  }
  get content() {
    return this.articleForm.get('content');
  }

  submit() {
    this.newArticle.name = this.name.value;
    this.newArticle.user = this.userName;
    this.newArticle.postDate = this.today;
    this.newArticle.modifiedDate = this.today;
    this.newArticle.summary = this.summary.value;
    this.newArticle.content = this.content.value;

    this.articleService.addArticle(this.newArticle)
    .then(
      err => console.log(err));
  }

}
