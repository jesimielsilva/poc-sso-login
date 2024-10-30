import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sso-in',
  templateUrl: './login-sso-in.component.html',
  styleUrls: ['./login-sso-in.component.css']
})
export class LoginSsoInComponent {

  form: FormGroup

  @Output() logged = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ){
    this.form = new FormGroup({
      user: new FormControl(''),
      password: new FormControl('')
    }) 
  }

  login(){
    const user = this.form.value.user
    const pass = this.form.value.password

    if(user === 'admin' && pass ==='aaddmm'){
      this.sendLogged(true)
      this.router.navigateByUrl('/signup')
    }
  }

  sendLogged(logged: boolean) {
    this.logged.emit(logged);
  }
}
