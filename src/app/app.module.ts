import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsService } from './authors.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormComponent } from './form/form.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    SearchBarComponent,
    LoginComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    FormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CoursesService, AuthorsService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
