import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() idItem:string;
  @Input() titulo: string;
  @Input() icone: string;
  @Input() link: string;
  private idAtivo: string;

  constructor(public router: Router) { }

  linkParaRota(id: string, linkRota: string) {
    this.router.navigate([linkRota]);
    //this._menuService.alterarMenuAtivo(id);
  }

  verificaAtivo(linkRota: string): string{
    var active = this.router.isActive(linkRota, true);
    if(active)
      return "nav-item active";
    return "nav-item";
  }

  ngOnInit(): void {
  }
}
