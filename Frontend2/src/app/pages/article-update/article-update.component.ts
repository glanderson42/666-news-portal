import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.css']
})
export class ArticleUpdateComponent implements OnInit {
  protected article: Article;
  protected loadedArticle: Article;
  private id: number;

  articleForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });

  today =  new Date(Date.now());

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private authService: AuthService
    ) { }

  async ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.article = await this.articleService.getArticle(this.id);

    this.loadedArticle = {
      id: this.article.id,
      name: this.article.name,
      user: this.article.user,
      postDate: this.article.postDate,
      modifiedDate: this.article.modifiedDate,
      summary: this.article.summary,
      content: this.article.content
    };
  }

  get getName() {
    return this.articleForm.get('name');
  }
  get getSummary() {
    return this.articleForm.get('summary');
  }
  get getContent() {
    return this.articleForm.get('content');
  }

  submit() {
    this.loadedArticle.name = this.getName.value;
    this.loadedArticle.user = this.article.user;
    this.loadedArticle.postDate = this.article.postDate;
    this.loadedArticle.modifiedDate = this.today;
    this.loadedArticle.summary = this.getSummary.value;
    this.loadedArticle.content = this.getContent.value;

    this.articleService.updateArticle(this.loadedArticle, this.id)
    .then(
      err => console.log(err));
  }
}
