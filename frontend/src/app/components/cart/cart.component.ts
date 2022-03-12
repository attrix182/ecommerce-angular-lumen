import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { CartService } from '@app/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'os-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('modalPost', { read: TemplateRef })
  modalPost: TemplateRef<any>;
  public product: any = '';

  items: any[] = [];
  @Input() show: boolean = false;

  constructor(private modalService: NgbModal, private cartSVC: CartService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  openModalCart() {
    console.log("llego");
    console.log(this.items[0]);
    this.modalService.open(this.items[0]);
  }



  getCartItems() {
    this.cartSVC.getItems$().subscribe((res) => {
      this.items = res;
    });
  }
}
