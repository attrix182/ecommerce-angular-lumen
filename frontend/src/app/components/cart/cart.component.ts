
import { Component, OnInit, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { BuyService } from '@app/services/buy.service';
import { CartService } from '@app/services/cart.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'os-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('modalCart', { read: TemplateRef })
  modalCart: TemplateRef<any>;

  //public product: any = '';

  @Output() changeShowCart: EventEmitter<any> = new EventEmitter<any>();

  @Input() items: any[] = [];

  constructor(
    private modalService: NgbModal,
    private cartSVC: CartService,
    config: NgbModalConfig,
    private buySvc: BuyService
  ) {
    config.beforeDismiss = () => {
      this.changeShowCart.emit(false);
      return true;
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.openModalCart();
    }, 300);
  }

  openModalCart() {
    this.modalService.open(this.modalCart);
  }

  setVisibility() {
    this.changeShowCart.emit(false);
  }

  goToPay() {



    let link = this.buySvc.generatePayWhatsapp({
      products: this.items,
      total: this.getTotalAMount()
    });

    window.open(link, '_blank');
    console.log(link);
  }

  getTotalAMount() {
    let total = 0;
    this.items.forEach((element) => {
      total += element.price;
    });
    return total;
  }
}
