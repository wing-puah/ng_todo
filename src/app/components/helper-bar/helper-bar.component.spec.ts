import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperBarComponent } from './helper-bar.component';

describe('HelperBarComponent', () => {
  let component: HelperBarComponent;
  let fixture: ComponentFixture<HelperBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
