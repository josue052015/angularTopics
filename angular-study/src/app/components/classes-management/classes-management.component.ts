import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-management',
  templateUrl: './classes-management.component.html',
  styleUrls: ['./classes-management.component.scss']
})
export class ClassesManagementComponent implements OnInit {

  selected = false
  constructor() { }

  ngOnInit(): void {
  }

  getClass(color: string) {
    switch (color) {
      case "blue":
        return 'bg-blue'
        break;
      case "red":
        return 'bg-red'
        break;
      default:
        return ''
        break;
    }
  }

}
