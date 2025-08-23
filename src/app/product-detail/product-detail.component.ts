import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { CartServiceService } from '../service/cart-service.service';
import {ToKhrPipe} from '../to-khr.pipe';
declare const axios: any;
declare const $: any;
declare const Swal: any;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  imports: [JsonPipe, CurrencyPipe, NgIf, ToKhrPipe],
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  public product: any = null;
  public loading: boolean = true;
  public errorMessage: string = '';

  constructor(private route: ActivatedRoute, private cartService: CartServiceService) {}

  ngOnInit(): void {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');

    if (!product_id) {
      this.errorMessage = 'Invalid product ID.';
      this.loading = false;
      return;
    }

    const url = `https://sv-gen-api.bczin2zin2takeo.us/api/product_detail?id=${product_id}`;

    $.LoadingOverlay("show", {
      image: "/slider/product.png",
      imageAutoResize: true,
      imageAnimation: "1 s fadein",
      background: "rgba(255, 255, 255, 0.7)",
      size: 500,
      zIndex: 9999,
      text: "Product Loading...",
      textColor: "#000",
      textResize: "22px"
    });

    axios.get(url)
      .then((response: any) => {
        this.product = response.data || null;
        if (!this.product || Object.keys(this.product).length === 0) {
          this.errorMessage = 'Product Not Found';
        }
      })
      .catch((error: any) => {
        this.errorMessage = 'Failed to load product. Please try again later.';
        console.error('Axios error:', error);
        this.product = null;
      })
      .finally(() => {
        this.loading = false;
        $.LoadingOverlay("hide");
      });
  }

  onAddToCart(product: any) {
    if (!product) return;

    this.cartService.addItem(product);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1000
    });
  }
}
