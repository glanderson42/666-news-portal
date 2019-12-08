import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8080/api";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('username:password')
    })
  };
  
  constructor(private httpClient: HttpClient) { }

  login(loginData) {
    return this.httpClient.post(
      this.baseUrl + "/users/login",
      this.httpOptions,
      loginData
    );
  }
  
  registration(regData) {
    return this.httpClient.post(
      this.baseUrl + "/users/register",
      this.httpOptions,
      regData
    );
  }

  getUsers() {
    return this.httpClient.get(
      this.baseUrl + "/users/",
      this.httpOptions
    );
  }

  getUser(id: Number) {
    return this.httpClient.get(
      this.baseUrl + "/users/" + id,
      this.httpOptions
    );
  }

  updateUser(userData, id: Number) {
    return this.httpClient.put(
      this.baseUrl + "/users/" + id,
      this.httpOptions,
      userData
    );
  }

  deleteUser(id: Number) {
    return this.httpClient.delete(
      this.baseUrl + "/users/" + id,
      this.httpOptions
    );
  }

  getArticles() {
    return this.httpClient.get(
      this.baseUrl + "/article",
      this.httpOptions
    );
  }

  getArticle(id: Number) {
    return this.httpClient.get(
      this.baseUrl + "/article/" + id,
      this.httpOptions
    );
  }

  createArticle(articleData) {
    return this.httpClient.post(
      this.baseUrl + "/article",
      this.httpOptions,
      articleData
    );
  }

  updateArticle(articleData, id: Number) {
    return this.httpClient.put(
      this.baseUrl + "/article/" + id,
      this.httpOptions,
      articleData
    );
  }

  deleteArticle(id: Number) {
    return this.httpClient.delete(
      this.baseUrl + "/article/" + id,
      this.httpOptions
    );
  }

   getThumbnails() {
     return this.httpClient.get(
      this.baseUrl + "/thumbnails",
      this.httpOptions
     );
   }

   createThumbnail(thumbnailData) {
     return this.httpClient.post(
      this.baseUrl + "/thumbnails/",
      this.httpOptions,
      thumbnailData
     );
   }
}
