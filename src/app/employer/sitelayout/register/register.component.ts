import { Component, OnInit } from '@angular/core';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  individualRegisterForm: FormGroup;
  mobileValid = false;

  public exampleData;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.individualRegisterForm = this.formBuilder.group({
      industry: ['', [Validators.required]],
      companyname: ['', [Validators.required]],
      contactemail: ['', [Validators.required]],
      contactname: ['', [Validators.required]],
      contactpincode: ['', [Validators.required]],
      contactmobile: ['', [Validators.required]]
    });

    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.individualRegisterForm.invalid) {
      return;
    }
    console.log(this.individualRegisterForm.value)
  }

  hasError(data) {
    if (!data) {
      this.individualRegisterForm.controls['contactmobile'].setErrors({ 'incorrect': true });
    }
  }

  getNumber(data) {
    this.individualRegisterForm.controls['contactmobile'].setValue(data);
  }

  telInputObject(data) {
    console.log(data)
  }

  onCountryChange(data) {
    console.log(data)
  }

}
