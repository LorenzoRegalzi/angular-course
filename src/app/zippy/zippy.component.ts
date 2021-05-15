import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }
;
  displayState= "block"
  displayColor="grey"

  status = true;

  changeStatus() {
    this.status ? (this.displayState="none", this.displayColor="red") : (this.displayState= "block", this.displayColor= "grey");

    this.status = !this.status
  }

  ngOnInit(): void {
  }

}
