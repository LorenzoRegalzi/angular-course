import { PostService } from './../post.service';
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
    this.service.getPost()
      .subscribe(response => {
        this.posts = response;
      }, error => {
        console.log(error);
      })
  }

  createpost(input: HTMLInputElement){
    let post = {title : input.value}
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        
        this.posts.splice(0, 0, post);
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
  updatepost(post:any){

    this.http.patch(this.url + '/' + post.id, JSON.stringify({isReadable : true}))
      .subscribe(response => {
        console.log(response);
    });
  }
  deletepost(post:any){

    this.service.deletePost(post)
      .subscribe(
        response => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1);
        console.log(index);
    }, (error: Response) => {
      console.log(error);
    });
  }

}
