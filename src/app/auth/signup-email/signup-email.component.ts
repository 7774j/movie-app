import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-signup-email',
  templateUrl: './signup-email.component.html',
  styleUrls: ['./signup-email.component.css']
})
export class SignupEmailComponent implements OnInit, OnDestroy {
  form: FormGroup
  formValues: any
  submitting = false
  hasError = false
  errorMsg: string
  private subs = new Subscription()
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.createFormControls()
    this.createForm()
  }

  createFormControls() {
    this.formValues = {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required])],
      emailConfirmation: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordConfirmation: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    }
  }

  createForm() {
    this.form = this.fb.group(this.formValues, { validator: MustMatch('password', 'passwordConfirmation') })
  }

  // convenience getter for form controls
  get f() {
    if (this.form && this.form.controls) {
      return this.form.controls
    }
  }

  signupUser() {
    const params = {}
    this.subs.add(
      this.userService.registerUser(params).subscribe(data => {
        if (data) {
          const newUser = new User(data)
        } else {

        }
      })
    )
  }

  routeToLogin() {
    this.router.navigate(['login'])
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
