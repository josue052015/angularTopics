import { Component, Input, OnInit } from '@angular/core';
import { DemonSlayer } from 'src/shared/models/demonSlayers.model';

@Component({
  selector: 'app-add-demon-slayer-form',
  templateUrl: './add-demon-slayer-form.component.html',
  styleUrls: ['./add-demon-slayer-form.component.scss']
})
export class AddDemonSlayerFormComponent implements OnInit {

  @Input() demonSlayers: DemonSlayer[] = []

  newDemonSlayer: DemonSlayer = {
    name: '',
    rank: ''
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  handleSubmit(){
    this.demonSlayers.push(this.newDemonSlayer)
    this.newDemonSlayer = {
      name: '',
      rank: ''
    }
  
  }

}
