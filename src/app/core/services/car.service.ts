import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import {BehaviorSubject} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private products: Product[] = [];
  private cart =  new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }
}
