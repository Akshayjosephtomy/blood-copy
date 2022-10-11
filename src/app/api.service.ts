import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private x:HttpClient) { }

  viewBlood=()=>{
    return this.x.get("https://jsonplaceholder.typicode.com/users")
  }
}
