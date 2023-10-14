import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { NgxLazyMatSelectDirective } from './ngx-lazy-mat-select.directive';



@NgModule({
  declarations: [
    NgxLazyMatSelectDirective
  ],
  imports: [
    MatSelectModule
  ],
  exports: [
    NgxLazyMatSelectDirective
  ]
})
export class NgxLazyMatSelectModule { }
