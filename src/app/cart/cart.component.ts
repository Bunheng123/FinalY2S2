import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { CurrencyPipe, DecimalPipe, JsonPipe } from '@angular/common';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToKhrPipe } from '../to-khr.pipe';
import {RouterLink} from '@angular/router';
declare const Swal:any;

@Component({
  selector: 'app-cart',
  imports: [
    JsonPipe, NgForOf, FormsModule, CurrencyPipe, ToKhrPipe, DecimalPipe, RouterLink
  ],
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartServiceService) {}

  trackByName(index: number, item: any): string {
    return item.name;
  }

  removeItem(item: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cartService.removeItem(item); // 🟢 Only remove if confirmed
        Swal.fire({
          title: "Removed!",
          text: "Your cart item has been removed.",
          icon: "success"
        });
      }
    });
  }
  decreaseQty(item: any) {
    if(item.qty>1){
      this.cartService.descrementQty(item);
    }
  }
  increaseQty(item: any) {
    this.cartService.incrementQty(item);
  }

}
