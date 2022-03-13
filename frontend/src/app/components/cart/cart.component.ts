import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { CartService } from '@app/services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'os-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('modalCart', { read: TemplateRef })
  modalCart: TemplateRef<any>;

  //public product: any = '';

  @Input() items: any[] = [];

  constructor(private modalService: NgbModal, private cartSVC: CartService) {}

  ngOnInit() {
    setTimeout(() => {

    this.openModalCart();
    }, 300);
  }

  openModalCart() {
    console.log('open');
    this.modalService.open(this.modalCart);
  }
}
