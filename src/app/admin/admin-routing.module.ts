import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './comonents/product-form/product-form.component';
import { NavComponent } from './comonents/nav/nav.component';
import { DashboardComponent } from './comonents/dashboard/dashboard.component';
import { TableComponent } from './comonents/table/table.component';
import { ProductListComponent } from './comonents/product-list/product-list.component';
import { FormProductComponent } from './comonents/form-product/form-product.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
