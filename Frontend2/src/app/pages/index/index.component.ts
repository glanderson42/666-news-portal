import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  protected articles: Article[];

  constructor(private articleService: ArticleService) { }

  async ngOnInit() {
    this.articles = await this.articleService.getArticles();
  }

}
