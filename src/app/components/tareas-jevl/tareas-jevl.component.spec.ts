import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasJEVLComponent } from './tareas-jevl.component';

describe('TareasJEVLComponent', () => {
  let component: TareasJEVLComponent;
  let fixture: ComponentFixture<TareasJEVLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasJEVLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasJEVLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
