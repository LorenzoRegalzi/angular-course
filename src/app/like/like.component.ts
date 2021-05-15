import { Component, OnInit, Input } from '@angular/core';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('isLike') isFavorite!: boolean;
  @Input('likesCounts') likesCounts!: number;

  constructor() { }

  starColor = "orange";
  farBell = farHeart;
  fasBell = fasHeart;


  onClick(){

  
    this.isFavorite = !this.isFavorite;
    
    


    if(this.isFavorite){
      return (this.farBell = farHeart, this.starColor = 'red') && this.likesCounts++;
    } 

    return (this.farBell = fasHeart, this.starColor = 'grey') && this.likesCounts--;
    
    
  }

  ngOnInit(){


    if(this.isFavorite){
      return (this.farBell = farHeart, this.starColor = 'red');
    } 

    return (this.farBell = fasHeart, this.starColor = 'grey');
  }

}
