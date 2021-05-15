import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar as farBell } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  
  @Input('isFavorite') isFavorite?: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }

  starColor = "orange";
  farBell = farBell;
  fasBell = fasBell;


  
  onClick(){

    this.isFavorite = !this.isFavorite;

    this.change.emit({newValue : this.isFavorite});
    
    this.isFavorite ? (this.farBell = fasBell, this.starColor = 'orange') : (this.farBell = farBell, this.starColor = 'orange');
  }


  ngOnInit(){
    if(this.isFavorite){
      
      return (this.farBell = fasBell, this.starColor = 'orange');
    } 

    return (this.farBell = farBell, this.starColor = 'orange');
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
