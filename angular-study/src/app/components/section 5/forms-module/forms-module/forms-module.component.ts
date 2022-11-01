import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-module',
  templateUrl: './forms-module.component.html',
  styleUrls: ['./forms-module.component.scss']
})
export class FormsModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(event: any) {
    //with "prevent default" we are preventing the default event behavior of the submit event, avoiding the refresh 
    //caused by the event.

    event.preventDefault()
    console.log("we prevent the refresh");
  }

  handleFormsModuleSubmit(){
    console.log("we are using the FormsModule from angular")
  }

}
