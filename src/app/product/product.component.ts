import { Component } from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {NgForOf} from '@angular/common';
import {CartServiceService} from '../service/cart-service.service';
import {ProductServiceService} from '../service/product-service.service';
declare const Swal:any;

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent, NgForOf],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.css'

})
export class ProductComponent {
  constructor(public cartService: CartServiceService, public products:ProductServiceService) {

  }
  onAddToCard(product: any) {
    this.cartService.addItem(product)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1000
    });
  }
}
