import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-example',
  templateUrl: './viewchild-example.component.html',
  styleUrls: ['./viewchild-example.component.scss']
})
export class ViewchildExampleComponent implements OnInit {

  //ViewChild is a decorator to make a reference about a html element. In this case we make a reference 
  //through "local reference" 

  // "!" in this case is the is the non-null assertion operator and is to let to typescript know that property 
  //will not be null. In this case the alert comes because typescript think that reference could be null

  @ViewChild('viewChildInput') viewChildInput !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  search(){

    const value = this.viewChildInput.nativeElement.value;

    console.log("viewChildInputValue", value)

    this.viewChildInput.nativeElement.value = '';

  }

}
