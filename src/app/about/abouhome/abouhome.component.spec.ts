import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouhomeComponent } from './abouhome.component';

describe('AbouhomeComponent', () => {
  let component: AbouhomeComponent;
  let fixture: ComponentFixture<AbouhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouhomeComponent]
    });
    fixture = TestBed.createComponent(AbouhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
