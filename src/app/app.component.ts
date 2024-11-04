import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'poc-sso-login';
  innerWidth: any
  userLooged: boolean = false

  constructor(private router: Router){

  }

  ngOnInit(): void {
    
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
