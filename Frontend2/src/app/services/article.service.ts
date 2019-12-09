import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Article } from '../models/Article';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private route = 'articles';

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  public getArticles(): Promise<Article[]> {
    return this.httpService.get<Article[]>(this.route);
  }

  public getArticle(id: number): Promise<Article> {
    return this.httpService.get<Article>(this.route + '/' + id);
  }

  public async addArticle(article: Article) {
    try {
      await this.httpService.post<Article>(this.route, article);
      this.router.navigate(['articles']);
    } catch (e) {}
  }
}
