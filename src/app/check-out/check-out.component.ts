import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToKhrPipe } from '../to-khr.pipe';
import { CartServiceService } from '../service/cart-service.service';

declare const Swal: any;

export interface CartItem {
  name: string;
  price: number;
  qty: number;
  imageUrl: string;
}

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, ToKhrPipe],
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  private cartService = inject(CartServiceService);

  cartItems: CartItem[] = [];
  total = 0;

  checkoutData = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    paymentMethod: 'credit-card',
    notes: ''
  };

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartItems = this.cartService.getItem();
    this.total = this.cartService.getTotal();
  }

  trackByName(index: number, item: CartItem): string {
    return item.name;
  }

  submitCheckout(): void {
    if (!this.checkoutData.fullName || !this.checkoutData.email || !this.checkoutData.address) {
      Swal.fire('Missing Information', 'Please fill in all required fields.', 'warning');
      return;
    }

    Swal.fire({
      title: 'Confirm Purchase',
      html: `
        <p><strong>Name:</strong> ${this.checkoutData.fullName}</p>
        <p><strong>Email:</strong> ${this.checkoutData.email}</p>
        <p><strong>Address:</strong> ${this.checkoutData.address}, ${this.checkoutData.city}, ${this.checkoutData.country}</p>
        <p><strong>Payment:</strong> ${this.checkoutData.paymentMethod}</p>
        <p><strong>Total:</strong> ${this.total.toLocaleString()} USD</p>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, place order',
      cancelButtonText: 'Cancel'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cartItems = [];
        this.total = 0;
        localStorage.removeItem('cart');
        Swal.fire('Order Placed!', 'Thank you for your purchase.', 'success');
      }
    });
  }
}
