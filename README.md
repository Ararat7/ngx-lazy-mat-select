# NgxLazyMatSelect

Copy of [ng-mat-select-infinite-scroll](https://www.npmjs.com/package/ng-mat-select-infinite-scroll) for  Angular Material 16+

`npm i ngx-lazy-mat-select`


### Usage

```typescript
import { NgxLazyMatSelectModule } from 'ngx-lazy-mat-select';
```
Add `NgxLazyMatSelectModule` to NgModule imports alongside with `MatFormFieldModule` and `MatSelectModule`.


Use `ngxLazyMatSelect` directive.

```html
<mat-form-field>
  <mat-label>Select</mat-label>
  <mat-select ngxLazyMatSelect (infiniteScroll)="getNextBatch()" [complete]="offset === data.length">
    <mat-option *ngFor="let option of options$ | async" [value]="option">{{option}}</mat-option>
  </mat-select>
</mat-form-field>
```
