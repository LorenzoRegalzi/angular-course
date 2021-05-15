import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= "mimmo@gmail.com";


  takeEmail(){
    console.log(this.email);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
