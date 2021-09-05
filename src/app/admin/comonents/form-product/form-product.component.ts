import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import {MyValidador} from '../../../utils/validators'


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  dec: number;
  id: string
  

  constructor(
    private formbuilder: FormBuilder,
    private productsService: ProductsService,
  ) { 
    this.buildForm();

  }

  ngOnInit(): void {
    if (this.dec === 2) {
      this.productsService.getProduct(this.id).subscribe( response =>{
        this.form.patchValue(response);
      })
    }
  }



  saveProduct(event:Event){
    event.preventDefault();
    if(true){
      if (this.dec === 1) {
        this.productsService.postProduct(this.form.value).subscribe(response =>{
          console.log(response);
        })
      }
    }
      if (this.dec === 2) {
       this.productsService.putProduct(this.form.value , this.form.value.id).subscribe(response =>{
          console.log(response);
        })        
      }
  }

  private buildForm(){
    this.form = this.formbuilder.group({
      id:           ['', [Validators.required]],
      title:        ['', [Validators.required]],
      price:        ['', [Validators.required, MyValidador.isPriceValid]],
      image:        [''],
      description:  ['', [Validators.required]]
    })
  }


  get fillPrice(){
    return this.form.get('price');
  }

}
