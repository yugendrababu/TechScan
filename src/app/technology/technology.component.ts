import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  techstack=[
    {
      'language':'JavaScript',
      'Image':'../assets/JavaScript.png'
    },
    {
      'language':'java',
      'Image':'../assets/java.png'
    },
    {
      'language':'Python',
      'Image':'../assets/python.png'
    },
    {
      'language':'PHP',
      'Image':'../assets/php.png'
    },
    {
      'language':'Ruby',
      'Image':'../assets/ruby.png'
    }
      ];

  constructor(

  ) { }

  ngOnInit() {

  }

}
