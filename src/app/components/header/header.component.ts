import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() userLogged: boolean = false

  @Output() userLogout = new EventEmitter<boolean>();
  
  constructor(private router: Router){}

  logout(){
    this.userLogout.emit(false)
    this.router.navigateByUrl('/login')
  }
}
