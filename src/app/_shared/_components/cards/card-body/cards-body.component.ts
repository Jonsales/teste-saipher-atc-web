import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-body',
  templateUrl: './cards-body.component.html',
  styleUrls: ['./cards-body.component.css']
})
export class CardBodyComponent implements OnInit {

  @Input() titulo: string;
  @Input() subtitulo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
