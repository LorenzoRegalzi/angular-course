
import { AppError } from './common/errors/app-errors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient, private errorApp: AppError) { }

 
  getPost(){
    return this.http.get(this.url).pipe(
      
      catchError(this.errorApp.handleError)
  )}
  createPost(post:object){
    return  this.http.post(this.url, JSON.stringify(post)).pipe(

      catchError(this.errorApp.handleError)
  )}
  


  deletePost(id:number){
    return  this.http.delete(this.url + '/' + id).pipe(
      
      catchError(this.errorApp.handleError)
  )}




}
