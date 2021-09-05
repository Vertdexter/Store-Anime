import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormComponent } from './comonents/product-form/product-form.component';
import { NavComponent } from './comonents/nav/nav.component';
import { TableComponent } from './comonents/table/table.component';
import { DashboardComponent } from './comonents/dashboard/dashboard.component';
import { ProductListComponent } from './comonents/product-list/product-list.component';


import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FormProductComponent } from './comonents/form-product/form-product.component';



@NgModule({
  declarations: [
    ProductFormComponent, 
    NavComponent, 
    TableComponent, 
    DashboardComponent, 
    ProductListComponent, 
    FormProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    ReactiveFormsModule,
    MaterialModule,
    
  ]
})
export class AdminModule { }
