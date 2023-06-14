import { TestBed } from '@angular/core/testing';

import { NgxWindowResizedEventService } from './ngx-window-resized-event.service';

describe('NgxWindowResizedEventService', () => {
  let service: NgxWindowResizedEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWindowResizedEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
