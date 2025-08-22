import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgStyle, NgIf, NgFor, UpperCasePipe, LowerCasePipe, DatePipe, PercentPipe, CurrencyPipe } from '@angular/common';
import {CartServiceService} from './service/cart-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainsliderComponent,
    ProductCardComponent,
    NgStyle,
    NgIf,
    NgFor,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    PercentPipe,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sv2_todo_ng';
  image: string = '1.jpg';
  constructor(public cartService : CartServiceService) {
  }

}
