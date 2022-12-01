import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message = 'klk'
  setMessage(){
    this.message += 'a'
    console.log('mes', this.message)
  }  
}
