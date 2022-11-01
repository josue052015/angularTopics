import { Injectable } from '@angular/core';
import { DemonSlayer } from 'src/shared/models/demonSlayers.model';

@Injectable({
  providedIn: 'root'
})
export class ParentAndChildComunicationService {

  //good practices note:

  //the service properties should modified only in the service. Components should not have access to the original property
  //only to a get method
  
  private  _demonSlayers:DemonSlayer[] = [
    {name: "rengoku", rank: "pillar"},
    {name: "mitsuri", rank: "pillar"},
    {name: "giyuu", rank: "pillar"}
  ]

  //the better is to stablish a getter from the private property to access only to 'demonSlayers' copy out of the service
  get demonSlayers(){
    return [...this._demonSlayers]
  }

  constructor() { }

  saveDemonSlayer(demonSlayer: DemonSlayer){
    this._demonSlayers.push(demonSlayer)
  }
}
