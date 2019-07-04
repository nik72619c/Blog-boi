import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogEditorComponent } from '../blog/blog-editor/blog-editor.component';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  rootViewContainerRef:any;
  constructor(private http: HttpClient) {

    
   }

   createBlog(blog){
    return this.http.post('http://localhost:1234/createBlog', {
      blog: blog,
    withCredentials: true
    });
   }

   getBlogs(){
     return this.http.get('http://localhost:1234/getBlogs');
   }

}
