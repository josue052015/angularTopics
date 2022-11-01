import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-changes',
  templateUrl: './state-changes.component.html',
  styleUrls: ['./state-changes.component.scss']
})
export class StateChangesComponent implements OnInit {

  title = '';

  constructor() { }

  ngOnInit(): void {
  }

  setTitle(){
    this.title = "angular-study";
  }

  deleteTitle(){
    this.title = "";
  }

}
