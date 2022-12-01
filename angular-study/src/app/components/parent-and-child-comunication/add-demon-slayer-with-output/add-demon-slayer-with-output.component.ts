import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DemonSlayer } from 'src/app/shared/models/demonSlayers.model';


@Component({
  selector: 'app-add-demon-slayer-with-output',
  templateUrl: './add-demon-slayer-with-output.component.html',
  styleUrls: ['./add-demon-slayer-with-output.component.scss']
})
export class AddDemonSlayerWithOutputComponent implements OnInit {

  //output is a event that execute a method in the parent component.
  //We have to specify the event type in this case is a "DemonSlayer" type 
  @Output() onDemonSlayerSubmit: EventEmitter<DemonSlayer> = new EventEmitter();

  constructor() { }

  newDemonSlayer: DemonSlayer = {
    name: '',
    rank: ''
  }

  ngOnInit(): void {
  }

  handleSubmit(){
    //this emit the event and provide a value for the function to execute in the parent component and we pass the value
    //of the event, in this case is a new demon slayer
    this.onDemonSlayerSubmit.emit(this.newDemonSlayer)
  }

}
