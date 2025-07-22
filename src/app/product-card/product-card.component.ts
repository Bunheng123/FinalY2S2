import {Component, Input} from '@angular/core';
import {JsonPipe} from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  imports: [
    JsonPipe, [CommonModule]
  ],
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;

}
