import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'poc-sso-login';

  innerWidth: any
  userLooged: boolean = true

  constructor (private router: Router) {}

  ngOnInit(): void {
    this.checkRoute(this.router.url);

    // Observa as mudanças de rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
  }

  // Método para verificar a rota e definir userLooged
  private checkRoute(url: string) {
    if (url.includes('login')) {
      this.userLooged = false;
    } else if (url.includes('signup')) {
      this.userLooged = true;
    }

  }
  
  getLogged(logged: boolean){
    this.userLooged = logged
  }

  subscribeLogin(subscribe: any){
    subscribe.logged.subscribe((res: any) =>{
      this.getLogged(res)
    })
  }

  subscribeLoggout(subscribe: any){
    subscribe.logged.subscribe((res: any) =>{
      this.getLogged(res)
    })
  }

  logout(res: any){
    this.userLooged = res
  }

}
