import { Component, OnInit } from '@angular/core';
import { System } from '../../shared/models/system.model';

@Component({
  selector: 'app-sing-up-in',
  templateUrl: './sing-up-in.component.html',
  styleUrls: ['./sing-up-in.component.css']
})
export class SingUpInComponent implements OnInit {

  systems: System[] = []
  header: string[] = []

  constructor() {
    this.header = ['Nome Responsável', 'Validade Token', 'Número', 'Email Responsável', 'Ações']
    this.systems = [
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'}
    ]
  }

  ngOnInit(): void {
 
  }

}
