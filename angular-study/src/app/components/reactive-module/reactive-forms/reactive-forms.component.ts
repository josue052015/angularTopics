import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  /* 
    demonSlayerForm: FormGroup = new FormGroup({
      name: new FormControl("tomioka"),
      rank: new FormControl("Pillar")
    }) */

  //this allow us to do the same stuff but easily, is better form large forms because we have to declare only the properties
  //and in the side from the default value we can declare validations
  demonSlayerForm: FormGroup = this.formBuilder.group({
    name: ['Tomioka', [Validators.required, Validators.minLength(3)]],
    rank: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  fieldIsInvalid(field: string) {
    return this.demonSlayerForm.controls[field].errors && this.demonSlayerForm.controls[field].touched;
  }

  handleSubmit() {
    if (this.demonSlayerForm.invalid) {
      //this method is to touch all the fields in case the user doesnt touch the form
      //this is for show the validations in case of activate the submit event
      this.demonSlayerForm.markAllAsTouched();
      return;
    }
    console.log('this.demonSlayerForm', this.demonSlayerForm.value)

    //this is for reset the form once the user submit the information
    //this.demonSlayerForm.reset();

    //we can set default properties into reset as well 
    this.demonSlayerForm.reset({
      name: 'giyuu'
    })
  }

}
