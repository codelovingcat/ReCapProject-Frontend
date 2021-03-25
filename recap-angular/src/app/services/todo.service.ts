import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient : HttpClient) { }

    // getCars():Observable<TodoResponseModel>{
    // return this.httpClient.get<TodoResponseModel>(this.apiUrl);
       getTodos():Observable<Todo[]>{
       return this.httpClient.get<Todo[]>(this.apiUrl);
  }
}