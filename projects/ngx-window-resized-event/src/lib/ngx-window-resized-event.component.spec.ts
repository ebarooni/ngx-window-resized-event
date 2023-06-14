import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWindowResizedEventComponent } from './ngx-window-resized-event.component';

describe('NgxWindowResizedEventComponent', () => {
  let component: NgxWindowResizedEventComponent;
  let fixture: ComponentFixture<NgxWindowResizedEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWindowResizedEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWindowResizedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
