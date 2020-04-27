import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/_shared/_components/base/base-list-component';
import { PLanoVooModel } from 'src/app/_shared/_models/plano-voo-model';
import { PlanoVooFilter } from 'src/app/_shared/_models/filters/plano-voo-filter';
import { PlanoVooService } from 'src/app/_shared/_services/services/plano-voo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plano-voo',
  templateUrl: './plano-voo.component.html',
  styleUrls: ['./plano-voo.component.scss']
})
export class PlanoVooComponent extends BaseListComponent<PLanoVooModel, PlanoVooFilter, PlanoVooService>  
implements OnInit {

  titulos: string[] = ['Id', 'Número do Voo', 'Matrícula do Voo', 'Tipo da Aeronave', 'Origem', 'Destino', 'Data e Hora do Voo'];

  constructor(
    protected toastr: ToastrService,
    protected _service: PlanoVooService
  ) {
    super(toastr, _service);
  }

  ngOnInit(): void {
    this.buscarLista();
  }

}
