import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    OnInit, 
    DoCheck,
    OnDestroy 
        } from "@angular/core"; '@angular/core';
import {Product} from '../../../core/models/product.model'
import { CarService } from "src/app/core/services/car.service";


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls:['./product.componet.css']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy{
    @Input() product: Product;

    @Output() productClick: EventEmitter <any> = new EventEmitter();
    
    today = new Date();

    constructor(
        private carService : CarService
    ){}

    ngOnChanges(change: SimpleChange){
        console.log('Elemento');
        console.log(change);
    }

    ngOnInit(){
        console.log('ngOnInit');
        
    }

    ngDoCheck(){
        console.log('check');   
    }

    ngOnDestroy(){
        console.log('Destroy');
    }

    addProduct(){
        console.log('Agregar al carrito');
        // this.productClick.emit(this.product.id)  
        this.carService.addCart(this.product)      
    }
}