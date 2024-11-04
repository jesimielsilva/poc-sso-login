import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-sso-in',
  templateUrl: './login-sso-in.component.html',
  styleUrls: ['./login-sso-in.component.css']
})
export class LoginSsoInComponent {

  username = '';
  password = '';

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

}
