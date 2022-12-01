import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent  {

  date = new Date ()
  amount = 10000.3756
  percent = 0.50

//i18n pipes show something based on the value in the map (the value to compare comes from the property that we applied the pipe)

  //i18n select
  personNumbers = '1'

  personNumbersMap = {
    '1': 'invitarlo',
    '2': 'invitarlos'
  }

  //i18n plural 

  // unlike i18n select, i18n plural select the value based on conditions. So, you can have a dynamic result

  //If we change the information here, the message will display based on the quantity of pillars
  pillars = ['tomioka', 'rengoku','zanemi']

  pillarsMap = {
    '=0': 'there´s no pillar here',
    '=1': 'We have one pillar here',
    'other': 'We have # pillars here'
  }

  objectExample = {
    name:'Pedro',
    lastName: 'Rodriguez'
  }

  //interval is a rxjs method that creates an Observable that emits sequential numbers every specified interval of time
  counterObservable = interval(1000)

}
