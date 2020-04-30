import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/_shared/_components/base/base-list-component';
import { PlanoVooModel } from 'src/app/_shared/_models/plano-voo-model';
import { PlanoVooFilter } from 'src/app/_shared/_models/filters/plano-voo-filter';
import { PlanoVooService } from 'src/app/_shared/_services/services/plano-voo.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFilter } from 'src/app/_shared/_models/filters/base-filter';

@Component({
  selector: 'app-plano-voo',
  templateUrl: './plano-voo.component.html',
  styleUrls: ['./plano-voo.component.scss']
})
export class PlanoVooComponent extends BaseListComponent<PlanoVooModel, PlanoVooFilter, PlanoVooService>  
implements OnInit {

  titulos: string[] = ['Id', 'Número do Voo', 'Matrícula do Voo', 'Tipo da Aeronave', 'Origem', 'Destino', 'Data e Hora do Voo', 'Ações'];
  order: string[] = ['Id', 'numeroVoo', 'matriculaAeronave', 'tipoAeronave', 'origem', 'destino','dataHoraVoo'];

  constructor(
    protected toastr: ToastrService,
    protected _service: PlanoVooService,
    protected _router: Router,
    protected _route: ActivatedRoute
  ) {
    super(toastr, _service, _router, _route);
  }

  ngOnInit(): void {
    this.buscarLista(this.requestPaginate);
  }

  pesquisar(pesquisa: string) {
    this.requestPaginate.filtro = new BaseFilter();
    this.requestPaginate.filtro.valor = pesquisa;
    this.buscarLista(this.requestPaginate);
  }

}
