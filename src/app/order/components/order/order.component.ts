import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "../../../core/models/product.model"
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  products$: Observable<Product[]> 

  constructor(
    private carService: CarService
  ) {
    this.products$ = this.carService.cart$;
    console.log(this.products$);
    
   }

  ngOnInit(): void {
  }

}
