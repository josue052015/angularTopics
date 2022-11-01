import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-and-ng-else',
  templateUrl: './ng-template-and-ng-else.component.html',
  styleUrls: ['./ng-template-and-ng-else.component.scss']
})
export class NgTemplateAndNgElseComponent implements OnInit {

  title = ""

  constructor() { }

  ngOnInit(): void {
  }

  setTitle(){
    this.title = "title"
  }

}
