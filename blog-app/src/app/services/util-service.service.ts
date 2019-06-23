import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor(private http: HttpClient) {

    
   }

   createBlog(){
    return this.http.post('http://localhost:1234/createBlog', {
      blog: {
        heading: 'my first blog post',
        content: ['content 1', 'content 2', 'content 3']
    },
    withCredentials: true
    })
   }

   getBlogs(){
     return this.http.get('http://localhost:1234/getBlogs');
   }
}
