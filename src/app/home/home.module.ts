import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import {HomeComponent} from './components/home/home.component';

import {HomeRoutinModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports:[
        HomeRoutinModule,
        SharedModule,
        CommonModule
    ]
})

export class HomeModule{

}