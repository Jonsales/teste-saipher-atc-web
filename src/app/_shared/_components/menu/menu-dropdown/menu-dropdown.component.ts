import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss']
})
export class MenuDropdownComponent implements OnInit {
  @Input() idItem: string;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() icone: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
