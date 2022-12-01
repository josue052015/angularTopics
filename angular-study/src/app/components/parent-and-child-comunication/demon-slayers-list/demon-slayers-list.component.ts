import { ParentAndChildComunicationService } from './../parent-and-child-comunication.service';
import { Component, OnInit } from '@angular/core';
import { DemonSlayer } from 'src/app/shared/models/demonSlayers.model';


@Component({
  selector: 'app-demon-slayers-list',
  templateUrl: './demon-slayers-list.component.html',
  styleUrls: ['./demon-slayers-list.component.scss']
})
export class DemonSlayersListComponent implements OnInit {

  constructor(private service: ParentAndChildComunicationService) { }

 get demonSlayers(){
  return this.service.demonSlayers;
 }

  ngOnInit(): void {
  }

  getDemonSlayerFromChild(demonSlayer: DemonSlayer){
    this.service.saveDemonSlayer(demonSlayer)
  }


}
