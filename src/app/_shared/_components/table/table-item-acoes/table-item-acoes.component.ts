import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-item-acoes',
  templateUrl: './table-item-acoes.component.html',
  styleUrls: ['./table-item-acoes.component.css']
})
export class TableItemAcoesComponent implements OnInit {
  @Input() link: string;
  @Input() titulo: string;
  @Input() item: any;
  @Output() exluirEmiter = new EventEmitter<any>();

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navegar(link: string): void{
    this._router.navigate([link]);
  }

  excluirItem(item){
    this.exluirEmiter.emit(item);
  }

}
