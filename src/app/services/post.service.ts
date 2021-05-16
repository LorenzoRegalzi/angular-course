import { DataService } from './data.service';

import { AppError } from '../common/errors/app-errors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  
  constructor(http: HttpClient, errorApp: AppError) { 
    super(http, errorApp, 'https://jsonplaceholder.typicode.com/posts')
  }

}
