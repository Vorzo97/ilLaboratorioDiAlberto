import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorFornitureComponent } from './indoor-forniture.component';

describe('IndoorFornitureComponent', () => {
  let component: IndoorFornitureComponent;
  let fixture: ComponentFixture<IndoorFornitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndoorFornitureComponent]
    });
    fixture = TestBed.createComponent(IndoorFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
