import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { ExistingUsers } from '../../shared/static-lists/existing-users';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {
  email: string
  password: string
  submitting = false
  hasError = false
  errorMsg: string
  existingUsers = ExistingUsers
  userLoggedIn: EventEmitter<any> = new EventEmitter()
  private subs = new Subscription()
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.hasError = false
    this.submitting = true
    const email = this.email
    const pass = this.password
    if (email && email !== '' && pass && pass !== '') {
      this.submitForm(email, pass)
    } else {
      this.hasError = true
    }
  }

  submitForm(email: string, pass: string) {
    const foundUser = this.existingUsers.find(x => x.email === email && x.password === pass)
    if (foundUser) {
      this.subs.add(
        this.userService.loginUser(foundUser).subscribe(user => {
          if (user) {
            this.userLoggedIn.emit(true)
            this.router.navigate(['/user-accounts'])
          }
        })
      )
    } else {
      this.hasError = true
      this.errorMsg = 'User not found!!'
    }

  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
