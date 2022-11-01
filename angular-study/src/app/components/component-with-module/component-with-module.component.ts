import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-with-module',
  templateUrl: './component-with-module.component.html',
  styleUrls: ['./component-with-module.component.scss']
})
export class ComponentWithModuleComponent implements OnInit {


  heroes = ['superman', 'ironman', 'batman']

  constructor() { }

  ngOnInit(): void {
  }

}
