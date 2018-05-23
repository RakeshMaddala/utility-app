
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilDashboardComponent } from './util-dashboard.component';

describe('UtilDashboardComponent', () => {
  let component: UtilDashboardComponent;
  let fixture: ComponentFixture<UtilDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
