import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { System } from '../../shared/models/system.model';

@Component({
  selector: 'app-form-system',
  templateUrl: './form-system.component.html',
  styleUrls: ['./form-system.component.css']
})
export class FormSystemComponent implements OnInit {

  @Output() inForm = new EventEmitter<boolean>();
  @Input() system: System = <System>{}
  //1: Cadastrando e 2: Editando
  @Input() type: number = 0

  constructor() { }

  ngOnInit(): void {
    console.log(this.system)
    console.log(this.type)
  }

  sendInForm() {
    this.inForm.emit(false);
  }

}
