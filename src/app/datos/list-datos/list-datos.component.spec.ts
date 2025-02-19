import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDatosComponent } from './list-datos.component';

describe('ListDatosComponent', () => {
  let component: ListDatosComponent;
  let fixture: ComponentFixture<ListDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
