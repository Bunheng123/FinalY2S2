import {Component, Input,  Output, EventEmitter} from '@angular/core';

import { CommonModule } from '@angular/common';
import {ToKhrPipe} from '../to-khr.pipe';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  imports: [
    [CommonModule], ToKhrPipe, RouterLink
  ],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() addToCart:any = new EventEmitter<any>();

  onAddToCart(product:any){
    return this.addToCart.emit(product);
  }

}
