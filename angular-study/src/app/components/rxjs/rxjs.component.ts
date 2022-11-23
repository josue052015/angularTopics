import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, of, Subject, switchMap } from 'rxjs';
import { debounceTime } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  //Debounce is like execute something after finish making some action and we are not making the action at the moment.
  // For example when we finish writing the input and we want to execute something when the user finish writing on the input

  //subject is like a kind of observable, we can subscribe to subject an then make something  after finish making some action
  debouncer: Subject<any> = new Subject()

  ngOnInit(): void {
    this.fetchData()
    this.setDebounceTimeToObservable()
  }

  setDebounceTimeToObservable() {
    //we are setting a delay to wait some time to execute the action after finished the event
    this.debouncer
      .pipe(
        /*
        Emits a notification from the source Observable only after a particular time span has passed without another 
        source emission.  It's like delay , but passes only the most recent notification from each burst of emissions.
        */
        debounceTime(300)
      )
      .subscribe(inputData => {
        console.log('inputData', inputData)
      })
  }

  fetchData() {
    //we will set the url wrong on purpose because we want to get the error message 
    //original url: 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
    this.http.get('https://pokeapi.co/api/v2/abidflity/?limit=20&offset=20')
      //PIPE is for intercept http requests and insert rxjs operators 
      .pipe(
        //catchError is a rxjs operator that in case of any error return something
        //of is to specify a new observable return 

        //we are basically intercepting the request and in case of error return a new observable
        catchError(error => of(['error message']))
      ).subscribe(data => {
        console.log('data', data)
      })
  }

  //implementing debounce time after put value into the input

  displayInputData(event: any) {
    const inputData = event.target.value;
    //we are setting a new value to the observable
    this.debouncer.next(inputData)
  }

  //how to get the value from an observable to use in another observable? is using the "switchMap" operator from rxjs

  getRouteIdAnDoHttpRequest() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ paramName }) => this.http.get(`some url/${paramName}`))
      )
      .subscribe(data => {
        //data will be the result of the http get method because with switch map we only use the "activatedRoute.params" subscribe
        //to get the get method subscribe data 
      })
  }

}
