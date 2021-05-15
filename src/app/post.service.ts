import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable'
//import 'rxjs/add/operator/catch'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

 
  getPost(){
    return this.http.get(this.url)
  }
  createPost(post:object){
    return  this.http.post(this.url, JSON.stringify(post))
  }
  deletePost(id:any){
    return  this.http.delete(this.url + '/' + id)
  }
}
