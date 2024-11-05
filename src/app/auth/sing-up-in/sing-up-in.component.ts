import { Component, OnInit } from '@angular/core';
import { System } from '../../shared/models/system.model';
import { SystemService } from '../../services/system.service';

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

  constructor(
    private systemService: SystemService
  ) {
    this.header = ['Nome Responsável', 'Validade Token', 'Número', 'Email Responsável', 'Ações']
    this.systems = [
    ]
    this.getListOfSystem()    
  }

  ngOnInit(): void {
    
  }

  toForm(value: boolean, type: number){
    this.inForm = value
    this.typeToForm = type
  }

  getInRegister(value: boolean){
    this.toForm(value, 1)
    this.getListOfSystem()
  }

  editSystem(system: System){
    this.toForm(true, 2)
    this.systemToEdit = system
  }

  getListOfSystem(){
    this.systemService.get().subscribe(res => {
      this.systems = res
    })
  }

  delete(id: number){
    this.systemService.delete(id).subscribe(res => {
      this.getListOfSystem()
    })
  }
}
