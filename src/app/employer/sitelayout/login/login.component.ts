import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  incorrectEmail = false;
  incorrectPassword = false;

  @ViewChild('usernameref') usernameRef: ElementRef<HTMLElement>;

  constructor(private formBuilder: FormBuilder, private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngAfterViewInit() {
    this.usernameRef.nativeElement.focus()
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this._auth.authenticate(this.loginForm.value).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error.error);
      if (error.error.message === "EmailId does not exists") {
        this.incorrectEmail = true;
      }
      if (error.error.message === "Incorrect Password") {
        this.incorrectPassword = true;
      }
    });
  }

}
