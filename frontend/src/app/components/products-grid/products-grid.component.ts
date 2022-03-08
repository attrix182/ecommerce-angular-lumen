import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/shared/services/products.service';

@Component({
  selector: 'os-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

public products: any[] =[];

  constructor(private productsSvc: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productsSvc.getAllProducts().subscribe((res) => {
     this.products.push(res)
    });
  }
}
