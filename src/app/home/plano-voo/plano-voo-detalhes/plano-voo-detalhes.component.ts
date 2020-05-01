import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { PlanoVooModel } from 'src/app/_shared/_models/plano-voo-model';
import { BaseComponent } from 'src/app/_shared/_components/base/base-component';
import { PlanoVooFilter } from 'src/app/_shared/_models/filters/plano-voo-filter';
import { PlanoVooService } from 'src/app/_shared/_services/services/plano-voo.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plano-voo-detalhes',
  templateUrl: './plano-voo-detalhes.component.html',
  styleUrls: ['./plano-voo-detalhes.component.scss']
})
export class PlanoVooDetalhesComponent 
extends BaseComponent<PlanoVooModel, PlanoVooFilter, PlanoVooService>
implements OnInit, AfterViewInit {
  
  @ViewChild('form', {static: false}) ngForm: NgForm;
  planoVoo: PlanoVooModel = new PlanoVooModel();
  dataVoo: NgbDateStruct;
  horaVoo: string;
  constructor(
    protected toastr: ToastrService,
    protected _service: PlanoVooService,
    protected _router: Router,
    protected _route: ActivatedRoute
    ) {
        super(toastr, _router, _route, _service);
  }

  public customPatterns = { 'A': { pattern: new RegExp('\[a-zA-Z\]')} };
  
  ngOnInit(): void {
    this.varificarItem();
  }

  varificarItem(){
    this._route.paramMap.subscribe(params => {
      try{
          var id = parseInt(params.get("id"));
          if(id > 0){
            this._service.get(id).subscribe(
              resp => {
                this.planoVoo = resp.data;
                this.converDate();
              },
              error =>{
                this.verificarErro(error)
              }
            )
          }          
      }catch(error){
      }      
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.adicionarValidacao(this.ngForm);
    }, 0);
  }

  enviar(){
    if(this.planoVoo.id>0){
        this._service.update(this.planoVoo)
        .subscribe(resp =>{
            this.emiteToastrSucess('Item alterado','Sucesso ao editar o Plano de Voo.');
            this._router.navigate(['/plano-voo']);
        },
        error => this.verificarErro(error)
    );
    }
    else {
        this._service.create(this.planoVoo)
        .subscribe(resp =>{
            this.emiteToastrSucess('Item cadastrado', 'Sucesso ao cadastrar o Plano de Voo');
            this._router.navigate(['/plano-voo']);
        },
        error => {
          this.verificarErro(error);
        }
    );
  };
}

  adicionarValidacao(ngForm: NgForm) {
    //ngForm.resetForm();
    ngForm.controls['planoVoo.numeroVoo'].setValidators([Validators.required, Validators.minLength(7)]);
    ngForm.controls['planoVoo.numeroVoo'].updateValueAndValidity();
    ngForm.controls['planoVoo.matriculaAeronave'].setValidators([Validators.required, Validators.minLength(6)]);
    ngForm.controls['planoVoo.matriculaAeronave'].updateValueAndValidity();
    ngForm.controls['planoVoo.tipoAeronave'].setValidators([Validators.required, Validators.minLength(4)]);
    ngForm.controls['planoVoo.tipoAeronave'].updateValueAndValidity();
    ngForm.controls['planoVoo.origem'].setValidators([Validators.required, Validators.minLength(4)]);
    ngForm.controls['planoVoo.origem'].updateValueAndValidity();
    ngForm.controls['planoVoo.destino'].setValidators([Validators.required, Validators.minLength(4)]);
    ngForm.controls['planoVoo.destino'].updateValueAndValidity();
    ngForm.controls['horaVoo'].setValidators([Validators.required]);
    ngForm.controls['horaVoo'].updateValueAndValidity();
    ngForm.controls['dataVoo'].setValidators([Validators.required]);
    ngForm.controls['dataVoo'].updateValueAndValidity();
    ngForm.form.markAsPristine();
  }
  changeMatriculaVoo(){
    if(this.planoVoo.matriculaAeronave.length >= 6){
      var matricula = this.planoVoo.matriculaAeronave;
      this.planoVoo.matriculaAeronave = `${matricula.substring(0,2)}-${matricula.substring(2, 6)}`;
    }
  }

  changeDate(){
    if(this.dataVoo && this.horaVoo){
      var dia = Number(this.dataVoo.day) < 10 ? `0${this.dataVoo.day}` : `${this.dataVoo.day}`;
      var hora = Number(this.horaVoo.substring(0,2))-3 < 9 ? `0${Number(this.horaVoo.substring(0,2))-3}` : `${Number(this.horaVoo.substring(0,2))-3}`;
      var minuto = this.horaVoo.substring(3,5);
      var mes  = Number(this.dataVoo.month) < 10 ? '0'+this.dataVoo.month : this.dataVoo.month;
      var dtStr =`${mes}/${dia}/${this.dataVoo.year} ${hora}:${minuto}:00`;
      this.planoVoo.dataHoraVoo = new Date(dtStr);
    }
  }

  converDate(){
    if(this.planoVoo.dataHoraVoo)
    {
      var date = this.planoVoo.dataHoraVoo.toString();
       this.dataVoo = { day: Number(date.substring(8, 10)), month: Number(date.substring(5, 7)), year: Number(date.substring(0, 4))};
       this.horaVoo = `${ date.substring(11, 13)}:${ date.substring(14, 16)}`
    }
  }

}
