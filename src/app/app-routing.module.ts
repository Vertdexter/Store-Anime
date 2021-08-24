import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {LayoutComponent} from './layout/layout.component'

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent, 
      children: [
        {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
        },
        
        {
          path: 'home',
          loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule )
        },
        {
          path: 'product',
          loadChildren: ()=> import('./product/product.module').then(m => m.ProductModule )
        },
        {
          path: 'contacto',
          component: ContactComponent
        },
        {
          path: 'demo',
          component: DemoComponent
        },
        {
          path: 'log',
          loadChildren: () => import ('./log/log.module').then( m => m.LogModule)
        }
      ]
    },
    {
      path: 'admin',
      loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule )
    },
    
    {
      path: '**',
      component: PageNoFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
