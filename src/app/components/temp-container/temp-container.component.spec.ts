import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempContainerComponent } from './temp-container.component';

describe('TempContainerComponent', () => {
  let component: TempContainerComponent;
  let fixture: ComponentFixture<TempContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
