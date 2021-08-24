import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule} from '@angular/material/form-field';







@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSelectModule, 
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    LayoutModule,
    MatFormFieldModule
    

  ],
  exports: [
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSelectModule, 
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    LayoutModule,
    MatFormFieldModule
  ],
  
  
})
export class MaterialModule { }
