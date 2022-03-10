import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'os-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

@Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }


}

