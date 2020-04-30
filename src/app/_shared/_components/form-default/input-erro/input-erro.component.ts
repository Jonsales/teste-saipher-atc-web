import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-erro',
  templateUrl: './input-erro.component.html',
  styleUrls: ['./input-erro.component.scss']
})
export class InputErroComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() prop: string;
  @Input() mensagemRequired: string;

  constructor() { }

  ngOnInit(): void {
  }

  verificarErro(): string{

    if(this.form != undefined &&
      this.form.controls[this.prop] != undefined &&
      (this.form.controls[this.prop].touched || this.form.controls[this.prop].dirty) &&
      this.form.controls[this.prop].errors){

        if(this.form.controls[this.prop].errors.required)
          return this.mensagemRequired ? this.mensagemRequired : 'Este campo é obrigatório';
        
        if(this.form.controls[this.prop].errors.maxlength)
          return `Tamanho máximo de ${this.form.controls[this.prop].errors.maxlength.requiredLength} caracteres`;
        if(this.form.controls[this.prop].errors.minlength)
          return `Tamanho mínimo de ${this.form.controls[this.prop].errors.minlength.requiredLength} caracteres`;
        if(this.form.controls[this.prop].errors.min)
          return `O valor minímo é ${this.form.controls[this.prop].errors.min.min}`;
        if(this.form.controls[this.prop].errors.max)
          return `O valor máximo é ${this.form.controls[this.prop].errors.max.min}`;
        if(this.form.controls[this.prop].errors.email)
          return `Informe um e-mail válido`;
        if(this.form.controls[this.prop].errors.CPFIsValid)
          return `CPF inválido`;
        if(this.form.controls[this.prop].errors.CNPJIsValid)
          return 'CNPJ inválido';
        if(this.form.controls[this.prop].errors.FormArrayValidatorNotSelected)
          return 'É necessário selecionar ao menos um item';
      return '';
    }
    return '';
  }

}
