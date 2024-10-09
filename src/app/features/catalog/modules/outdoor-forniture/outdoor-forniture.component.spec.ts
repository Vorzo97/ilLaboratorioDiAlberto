import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorFornitureComponent } from './outdoor-forniture.component';

describe('OutdoorFornitureComponent', () => {
  let component: OutdoorFornitureComponent;
  let fixture: ComponentFixture<OutdoorFornitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutdoorFornitureComponent]
    });
    fixture = TestBed.createComponent(OutdoorFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
