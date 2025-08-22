import { Component } from '@angular/core';
import {MainsliderComponent} from '../mainslider/mainslider.component';
import {ProductCardComponent} from '../product-card/product-card.component';
import {NgForOf} from '@angular/common';
import {CartServiceService} from '../service/cart-service.service';
import {ProductServiceService} from '../service/product-service.service';
declare const Swal: any;


@Component({
  selector: 'app-home',
  imports: [MainsliderComponent, ProductCardComponent, NgForOf],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
