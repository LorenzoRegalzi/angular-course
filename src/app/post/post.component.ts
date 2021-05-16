import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient,private service: PostService) {
    
  }
  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts)
  }

  createpost(input: HTMLInputElement){
    let post = {title : input.value, id: {}};
    input.value = '';
    this.posts.splice(0, 0, post);

    this.service.create(post)
      .subscribe(
        newPost => {
          post.id = newPost;
          
        
      }, (error: Response) => {
        console.log(error);
        this.posts.splice(0, 1)
      });
  }

  updatepost(post:any){
    this.service.update(post)
      .subscribe(updatepost => {
        console.log(updatepost);
    });
  }


  deletepost(post:any){
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1);

    this.service.delete(post)
      .subscribe(
        null, 
        (error: Response) => {
      this.posts.splice(index, 0, post)
      console.log(error);
    });
  }

}
