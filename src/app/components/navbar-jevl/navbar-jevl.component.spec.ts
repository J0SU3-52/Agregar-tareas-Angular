import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJEVLComponent } from './navbar-jevl.component';

describe('NavbarJEVLComponent', () => {
  let component: NavbarJEVLComponent;
  let fixture: ComponentFixture<NavbarJEVLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarJEVLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarJEVLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
