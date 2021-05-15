import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "titolo",
    isFavorite: false,
    isLike: false,
   
  }

  likesCount:number = 3;

  title = 'Angular course today is';

  change(event: FavoriteChangedEventArgs) {

    //this.post.isFavorite = isFavorite;
    console.log(event)
  }

}
