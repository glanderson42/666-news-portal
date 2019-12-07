import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  login(loginData) {
    return this.httpClient.post(
      this.baseUrl + "/users/login", 
      loginData
    );
  }
  
  registration(regData) {
    return this.httpClient.post(
      this.baseUrl + "/users/register",
      regData
    );
  }

  getUsers() {
    return this.httpClient.get(
      this.baseUrl + "/users/"
    );
  }

  getUser(id: Number) {
    return this.httpClient.get(
      this.baseUrl + "/users/" + id
    );
  }

  updateUser(userData, id: Number) {
    return this.httpClient.put(
      this.baseUrl + "/users/" + id,
      userData
    );
  }

  deleteUser(id: Number) {
    return this.httpClient.delete(
      this.baseUrl + "/users/" + id
    );
  }

  getArticles() {
    return this.httpClient.get(
      this.baseUrl + "/article"
    );
  }

  getArticle(id: Number) {
    return this.httpClient.get(
      this.baseUrl + "/article/" + id
    );
  }

  createArticle(articleData) {
    return this.httpClient.post(
      this.baseUrl + "/article",
      articleData
    );
  }

  updateArticle(articleData, id: Number) {
    return this.httpClient.put(
      this.baseUrl + "/article/" + id,
      articleData
    );
  }

  deleteArticle(id: Number) {
    return this.httpClient.delete(
      this.baseUrl + "/article/" + id
    );
  }

   getThumbnails() {
     return this.httpClient.get(
      this.baseUrl + "/thumbnails"
     );
   }

   createThumbnail(thumbnailData) {
     return this.httpClient.post(
      this.baseUrl + "/thumbnails/",
      thumbnailData
     );
   }
}
