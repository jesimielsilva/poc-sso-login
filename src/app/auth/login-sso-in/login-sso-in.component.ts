import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-login-sso-in',
  templateUrl: './login-sso-in.component.html',
  styleUrls: ['./login-sso-in.component.css']
})

export class LoginSsoInComponent {

  cpf = '';
  loginError = false;

  @Output() logged = new EventEmitter<boolean>();  

  constructor (private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.cpf).subscribe({
      next: (response) => {
        console.log('login bem sucedido');
        this.router.navigate(['/signup'])
      },
        error: (err) => {
          console.log('erro ao tentar logar', err);
          this.loginError = true;
        }
    });   
  } 

  sendLogged(logged: boolean) {
    this.logged.emit(logged);
  }   

}
