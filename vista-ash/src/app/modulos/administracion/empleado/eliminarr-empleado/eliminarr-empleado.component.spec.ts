import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarrEmpleadoComponent } from './eliminarr-empleado.component';

describe('EliminarrEmpleadoComponent', () => {
  let component: EliminarrEmpleadoComponent;
  let fixture: ComponentFixture<EliminarrEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarrEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarrEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
