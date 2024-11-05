import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { System } from '../../shared/models/system.model';
import { SystemService } from '../../services/system.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-system',
  templateUrl: './form-system.component.html',
  styleUrls: ['./form-system.component.css']
})
export class FormSystemComponent implements OnInit, OnChanges {

  @Output() inForm = new EventEmitter<boolean>();
  @Input() system: System = <System>{}
  //1: Cadastrando e 2: Editando
  @Input() type: number = 0

  form: FormGroup

  constructor(
    private systemService: SystemService
  ) { 
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      number: new FormControl(''),
      emailUser: new FormControl(''),
      emailToAlert: new FormControl(''),
      validToken: new FormControl(''),
      tokenShared: new FormControl(''),

    })

  }
  ngOnChanges(changes: SimpleChanges): void {

    if(this.type === 2){
      this.form.patchValue(this.system)
    }else{
      this.form.reset()
    }
    
  }

  ngOnInit(): void {
    console.log(1)
  }

  sendInForm() {
    this.inForm.emit(false);
  }

  save(){
    const sys: System = {
      name: this.form.value.name,
      number: this.form.value.number,
      emailUser: this.form.value.emailUser,
      emailToAlert: this.form.value.emailToAlert,
      validToken: new Date(this.form.value.emailToAlert),
      tokenShared: Boolean(this.form.value.tokenShared),
    }
    if(this.system.id){
      sys.id = this.system.id
      this.systemService.update(sys).subscribe(res => {
        console.log(res)
      })
    }else{
      this.systemService.create(sys).subscribe(res => {
        console.log(1)
      })
    }
    
  }

  
}
