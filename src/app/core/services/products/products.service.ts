import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from '../../models/product.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
 /*  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta blanca',
      price: 150,
      description: 'Camiseta con logo de ojos'
    },
    {
      id: '2',
      image: 'assets/images/camiseta2.png',
      title: 'Camiseta Sempai',
      price: 150,
      description: 'Camiseta con logo senpai'
    },
    {
      id: '3',
      image: 'assets/images/camiseta3.png',
      title: 'Camiseta Tom y Jerry',
      price: 200,
      description: 'Camiseta inspirada en Tom and Jerry'
    },
    {
      id: '4',
      image: 'assets/images/camiseta4.png',
      title: 'Camiseta One piece',
      price: 100,
      description: 'Camiseta inspirada en One Piece'
    },
    {
      id: '5',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie Shingeki',
      price: 400,
      description: 'Camiseta inspirada en Shingeki no Kyojin'
    },
    {
      id: '6',
      image: 'assets/images/hoodie2.png',
      title: 'Hoodie',
      price: 300,
      description: 'Chaqueta'
    },
    {
      id: '7',
      image: 'assets/images/hoodie3.PNG',
      title: 'Hoodie sad boy',
      price: 400,
      description: 'Chaqueta'
    },
    {
      id: '8',
      image: 'assets/images/hoodie4.PNG',
      title: 'Hoodie meme',
      price: 320,
      description: 'Chaqueta'
    },
  ]; */
  
  constructor(
    private http: HttpClient
  ) { }

  

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products`);

    // return this.products;
  }

  getProduct(id:string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);

    // return this.products.find(item => item.id === id)
  }

  postProduct(product:Product){
    return this.http.post(`${environment.url_api}/products`, product );
  }

  putProduct(change: Partial <Product>, id:string){
    return this.http.put(`${environment.url_api}/products/${id}`, change)
  }

  deleteProduct(id:string){
  return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
