import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-dropdown-item',
  templateUrl: './menu-dropdown-item.component.html',
  styleUrls: ['./menu-dropdown-item.component.scss']
})
export class MenuDropdownItemComponent implements OnInit {
 @Input() titulo: string;
 @Input() link: string;
  
 constructor(public router: Router) { }

  ngOnInit(): void {
  }
  
  linkParaRota(linkRota: string) {
    this.router.navigate([linkRota]);
  }
  
  verificaAtivo(linkRota: string): string{
    var active = this.router.isActive(linkRota, true);
    if(active)
      return "collapse-item active";
    return "collapse-item";
  }
}
