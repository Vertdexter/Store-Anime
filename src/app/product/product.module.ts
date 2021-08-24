import { NgModule } from '@angular/core';

import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { CommonModule } from '@angular/common';
import {ProductRoutinModule} from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutinModule,
    SharedModule,
    MaterialModule
  ],
  
})
export class ProductModule { }
