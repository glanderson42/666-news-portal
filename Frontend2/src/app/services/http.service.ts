import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private get options() {
    const headers = {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    };

    if (window.localStorage.getItem('token')) {
      headers['Authorization'] = `Basic ${window.localStorage.getItem('token')}`;
    }

    return {
      headers: new HttpHeaders(headers)
    };
  }

  private URL = 'http://localhost:8080/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public get<T>(route): Promise<T> {
    return this.httpClient.get(this.URL + route, this.options)
      .toPromise() as Promise<T>;
  }

  public post<T>(route, body): Promise<T> {
    return this.httpClient.post(this.URL + route, body, this.options)
      .toPromise() as Promise<T>;
  }

  public put<T>(route, body): Promise<T> {
    return this.httpClient.put(this.URL + route, body, this.options)
      .toPromise() as Promise<T>;
  }

  public patch<T>(route, body): Promise<T> {
    return this.httpClient.patch(this.URL + route, body, this.options)
      .toPromise() as Promise<T>;
  }

  public delete<T>(route): Promise<T> {
    return this.httpClient.delete(this.URL + route, this.options)
      .toPromise() as Promise<T>;
  }
}
