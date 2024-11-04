import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-sso-in',
  templateUrl: './login-sso-in.component.html',
  styleUrls: ['./login-sso-in.component.css']
})

export class LoginSsoInComponent {

  username = '';
  password = '';

  @Output() logged = new EventEmitter<boolean>();

  constructor (private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('login bem sucedido');
      },
        error: (err) => {
          console.log('erro ao tentar logar', err);
          alert('credencial invalida');
        }
    });   
  }

  /*form: FormGroup  

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
    this.sendLogged(true)
    this.router.navigateByUrl('/signup')
    /* if(user === 'admin' && pass ==='aaddmm'){
      
    } 
  }*/

  sendLogged(logged: boolean) {
    this.logged.emit(logged);
  }

}
