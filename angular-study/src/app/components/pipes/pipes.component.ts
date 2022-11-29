import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent  {

  date = new Date ()
  amount = 10000.3756
  percent = 0.50

  //i18n select
  personNumbers = '1'

  personNumbersMap = {
    '1': 'invitarlo',
    '2': 'invitarlos'
  }

}
