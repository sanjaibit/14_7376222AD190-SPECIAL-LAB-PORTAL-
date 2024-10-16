import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTransferComponent } from './special-transfer.component';

describe('SpecialTransferComponent', () => {
  let component: SpecialTransferComponent;
  let fixture: ComponentFixture<SpecialTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialTransferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
