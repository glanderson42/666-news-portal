import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private route: string = 'article';

  constructor(private httpService: HttpService) {}

  public getArticles(): Promise<Article[]> {
    return this.httpService.get<Article[]>(this.route);
  }
}
