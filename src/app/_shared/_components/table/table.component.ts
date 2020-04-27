import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BasePaginateDataModel } from '../../_models/base/base-paginate-data-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() titulos: string[];
  @Input() resultPaginate: BasePaginateDataModel<any> = new BasePaginateDataModel<any>();

  constructor() { }

  ngOnInit(): void {
      this.resultPaginate = new BasePaginateDataModel<any>();
  }

  counter(i: number) {
    var list = new Array<number>();

    for(var x = 1; x <= i; x++){
      list.push(x);
    }

    console.log(list);
    return list.reverse();
}


}
