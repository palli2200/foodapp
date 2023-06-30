import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkcentersComponent } from './milkcenters.component';

describe('MilkcentersComponent', () => {
  let component: MilkcentersComponent;
  let fixture: ComponentFixture<MilkcentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilkcentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkcentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
