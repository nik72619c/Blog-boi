import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  constructor(private http: HttpClient) {

    
   }

   createBlog(blog){
    return this.http.post('http://localhost:1234/createBlog', {
      blog,
    withCredentials: true
    });
   }

   getBlogs(){
     return this.http.get('http://localhost:1234/getBlogs');
   }

}
