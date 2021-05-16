import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { faStar as farBell } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasBell } from '@fortawesome/free-solid-svg-icons';
import { faEye as fasEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  starColor = "orange";
  farBell = farBell;
  fasBell = fasBell;
  fasEye = fasEye

  authors;
  img = "https://picsum.photos/300/200";
  colSpan= 2;
  isActive = false;

  course = {
    name : 'Angular Master',
    rating : 4,
    students: 30234,
    price: 190.95,
    release: new Date(2021, 3, 1)
  }

  favorite(){
    if(this.farBell == farBell){
      return (this.farBell = fasBell, this.starColor = 'orange');
    } 

    return (this.farBell = farBell, this.starColor = 'black');
  }


  onClick($event: MouseEvent){

    console.log($event);

    if(this.isActive){
      return this.isActive = false;
    } 

    return this.isActive = true;
  }

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
