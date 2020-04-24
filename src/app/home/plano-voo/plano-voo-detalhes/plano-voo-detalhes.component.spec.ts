import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoVooDetalhesComponent } from './plano-voo-detalhes.component';

describe('PlanoVooDetalhesComponent', () => {
  let component: PlanoVooDetalhesComponent;
  let fixture: ComponentFixture<PlanoVooDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoVooDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoVooDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
