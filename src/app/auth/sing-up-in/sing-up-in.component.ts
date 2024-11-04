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
  inForm: boolean = false
  systemToEdit: System = <System>{}
  typeToForm: number = 0

  constructor() {
    this.header = ['Nome Responsável', 'Validade Token', 'Número', 'Email Responsável', 'Ações']
    this.systems = [
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      {name: 'Test1', validToken: new Date(), number: '727272733', emailUser: 'test@gmail.com'},
      
    ]
  }

  ngOnInit(): void {
 
  }

  toForm(value: boolean, type: number){
    this.inForm = value
    this.typeToForm = type
  }

  getInRegister(value: boolean){
    this.toForm(value, 1)
  }

  editSystem(system: System){
    this.toForm(true, 2)
    this.systemToEdit = system
  }
}
