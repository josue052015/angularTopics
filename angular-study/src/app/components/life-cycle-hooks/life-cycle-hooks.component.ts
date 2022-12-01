import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() message:any;
  constructor() { }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  //execute every time that an @input changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes)
  }
  //run on every change detection run, and immediately after ngOnInit() on the first run.
  //is executed before any change
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  //Respond after Angular projects external content into the component's view
  ngAfterContentInit(): void {
    console.log('ngAfterCont')
  }
  //Respond after Angular checks the content projected into the directive or component
  ngAfterContentChecked(): void {
    console.log('ngAfterContentC')
  }
 // Respond after Angular initializes the component's views and child views, or the view that contains the directive.
  ngAfterViewInit(): void {
    console.log('ngAfterView')
  }
  //Respond after Angular checks the component's views and child views, or the view that contains the directive.
  ngAfterViewChecked(): void {
    console.log('ngAfterView')
  }
  //Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


}
