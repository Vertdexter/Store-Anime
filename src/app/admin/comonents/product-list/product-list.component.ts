import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MatDialog } from '@angular/material/dialog';
import { FormProductComponent } from '../form-product/form-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];

  displayedColumns: string[] = ['#id', 'titulo', 'precio', 'descripcion', 'accion'];


  constructor(
    private productService: ProductsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchProducts()

  }

  openDialog(dec:number, id:string){
    const dialogRef = this.dialog.open(FormProductComponent)
    dialogRef.componentInstance.dec = dec
    dialogRef.componentInstance.id = id
    dialogRef.afterClosed().subscribe(response => {
      this.fetchProducts()
    })
    }


  fetchProducts() {
    this.productService.getAllProducts().subscribe(response => {
      this.products = response
    })
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
      this.fetchProducts()

    })
  }

}
