import { NgModule } from '@angular/core';
import { WindowResizedDirective } from './window-resized.directive';

@NgModule({
  declarations: [
    WindowResizedDirective,
  ],
  exports: [
    WindowResizedDirective,
  ]
})
export class NgxWindowResizedEventModule { }
