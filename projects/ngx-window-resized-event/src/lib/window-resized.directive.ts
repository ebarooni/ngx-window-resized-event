import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';
import {WindowResized} from "./window-resized.interface";

@Directive({
  selector: '[windowResized]'
})
export class WindowResizedDirective {
  @Output() windowResized = new EventEmitter<WindowResized>();

  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  @HostListener('window:resize', ['$event']) onWindowResized(event: Event) {
    const elementRef = this.elementRef.nativeElement;
    const window = event.target as Window;
    this.windowResized.emit({
      hostElement: {
        height: {
          offset: elementRef.offsetHeight,
          client: elementRef.clientHeight,
          scroll: elementRef.scrollHeight,
        },
        width: {
          offset: elementRef.offsetWidth,
          client: elementRef.clientWidth,
          scroll: elementRef.scrollWidth,
        }
      },
      window: {
        height: {
          inner: window.innerHeight,
          outer: window.outerHeight,
        },
        width: {
          inner: window.innerWidth,
          outer: window.outerWidth,
        },
      },
    });
  }

}
