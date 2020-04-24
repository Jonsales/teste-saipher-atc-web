import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-subtitulo',
  templateUrl: './menu-subtitulo.component.html',
  styleUrls: ['./menu-subtitulo.component.scss']
})
export class MenuSubtituloComponent implements OnInit {
  @Input() titulo: string;
  constructor() { }

  ngOnInit(): void {
  }
}
