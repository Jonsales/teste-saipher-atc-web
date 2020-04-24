import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoVooComponent } from './plano-voo.component';

describe('PlanoVooComponent', () => {
  let component: PlanoVooComponent;
  let fixture: ComponentFixture<PlanoVooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoVooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
