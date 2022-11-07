import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperClaveComponent } from './recuper-clave.component';

describe('RecuperClaveComponent', () => {
  let component: RecuperClaveComponent;
  let fixture: ComponentFixture<RecuperClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperClaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
