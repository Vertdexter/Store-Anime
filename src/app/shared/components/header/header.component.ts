import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import {map} from "rxjs/operators"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  carSize$: Observable<number>;

  constructor(
    private carService: CarService
  ) {
      this.carSize$ = this.carService.cart$.pipe(
      map( product => product.length)
    );
   }

  ngOnInit(): void {
  }

}
