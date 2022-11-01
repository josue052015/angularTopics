import { Component, OnInit } from '@angular/core';

interface demonSlayer {
  weapon: string;
  rank: string;
}

@Component({
  selector: 'app-typescript-topics',
  templateUrl: './typescript-topics.component.html',
  styleUrls: ['./typescript-topics.component.scss']
})



export class TypescriptTopicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  destructuration() {
    /* types of destructuration*/

    // 1- object destructuration

    const obj = {
      property: "message"
    }

    const { property } = obj;

    console.log(property)

    // 2- Array destructuration

    const array = ["nezuko", "tanjiro", "tomioka"]

    const [, , tomioka] = array // commas are for access to certain positions from the array

    console.log(tomioka)

    // 3- argument destructurarion 

    const displayDemonSlayer = (demonSlayers: demonSlayer[]) => {

      demonSlayers.forEach(({rank}) => {
        console.log(rank)
      })
       
    }

    const demonSlayers: demonSlayer[] = [
      {weapon: "katana", rank: "pillar"},
      {weapon: "hammer", rank: "pillar"}
    ] 

    displayDemonSlayer(demonSlayers);

  }

}
