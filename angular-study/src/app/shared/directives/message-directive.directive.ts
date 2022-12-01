import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[custom-message]'
})
export class MessageDirectiveDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  private _selectedColor = '#34cfeb'
  private _customMessage = 'custom directive'

  //using setters in the inputs allow us to react to changes dynamically in the custom directive

  @Input() set selectedColor(value: string) {
    this._selectedColor = value
    this.setColor()
  }

  @Input() set customMessage(value: string) {
    this._customMessage = value
    this.setText()
  }

  constructor(private elementReference: ElementRef<HTMLElement>) {
    this.htmlElement = elementReference
  }
  ngOnInit(): void {
    //we call these methods in onInit for define a default value in case of dont receive the values in the html
    this.setColor()
    this.setText()

    this.setClass()
  }

  setClass() {
    this.htmlElement.nativeElement.classList.add('custom-text')
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._selectedColor
  }

  setText() {
    this.htmlElement.nativeElement.innerText = this._customMessage
  }

}
