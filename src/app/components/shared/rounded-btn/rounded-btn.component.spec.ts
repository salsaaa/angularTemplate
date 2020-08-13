import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedBtnComponent } from './rounded-btn.component';

describe('RoundedBtnComponent', () => {
  let component: RoundedBtnComponent;
  let fixture: ComponentFixture<RoundedBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
