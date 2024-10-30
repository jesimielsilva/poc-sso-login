import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'poc-sso-login';

  userLooged: boolean = false

  constructor(private router: Router){

  }

  ngOnInit(): void {
    if(!this.userLooged){
      this.router.navigateByUrl('/login')
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
}
