import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavMainComponent } from './leftnav-main.component';

describe('LeftnavMainComponent', () => {
  let component: LeftnavMainComponent;
  let fixture: ComponentFixture<LeftnavMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftnavMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftnavMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
