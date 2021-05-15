import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  title = '';

  searching(search: string){
    let words = search.split(" ");

    console.log(words);

    var phrase = [];

    for (let i = 0; i < words.length; i++) {

      

      if(i !== 0){
        if (words[i] === 'of' || words[i] === 'the') {
          let prep = words[i]
          phrase.push(prep)
          continue 
        } 
      }
      
      let word = words[i].charAt(0).toUpperCase() + words[i].toLowerCase().slice(1);
        phrase.push(word)
    }

    if(phrase[0] == "" ){
      phrase.shift();
    }

    console.log(phrase);

    let title = phrase.join(" ");

    this.title = title;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
