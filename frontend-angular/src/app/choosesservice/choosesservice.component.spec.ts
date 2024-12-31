import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosesserviceComponent } from './choosesservice.component';

describe('ChoosesserviceComponent', () => {
  let component: ChoosesserviceComponent;
  let fixture: ComponentFixture<ChoosesserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosesserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosesserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
