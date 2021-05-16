
import { AppError } from '../common/errors/app-errors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';



import { catchError } from 'rxjs/operators';



export class DataService {
  
  constructor(private http: HttpClient, private errorApp: AppError, private url:any) { }

 
  getAll(){
    return this.http.get(this.url).pipe(
      map(response => response),
      catchError(this.errorApp.handleError)
  )}
  create(resource:any){
    return  this.http.post(this.url, JSON.stringify(resource)).pipe(
        map(response => response),
      catchError(this.errorApp.handleError)
  )}

  update(resource:any){
    return  this.http.patch(this.url + '/' + resource.id, JSON.stringify({isReadable : true})).pipe(
        map(response => response),
      catchError(this.errorApp.handleError)
  )}
  


  delete(id:number){
    return  this.http.delete(this.url + '/' + id).pipe(
        map(response => response),
      catchError(this.errorApp.handleError)
  )}

}
