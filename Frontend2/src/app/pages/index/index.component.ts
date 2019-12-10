import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  protected articles: Article[];

  constructor(private articleService: ArticleService, private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.articles = await this.articleService.getArticles();
  }

  delete(id: number) {
    this.articleService.deleteArticle(id)
    .then(res => {
      console.log(res);
      this.ngOnInit();
    },
    err => {
      alert('You cannot delete this article!');
    });
  }
}
