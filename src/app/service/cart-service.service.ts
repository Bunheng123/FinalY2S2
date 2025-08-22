import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() {

    this.cart = JSON.parse(localStorage.getItem('carts') ?? '[]')
  }
  private cart: any=[];

  addItem(item: any) {
    let dpl_index: number = this.cart.findIndex((obj: any) => obj.id === item.id);

    if (dpl_index > -1) {
      // Item already exists → increase qty
      this.cart[dpl_index].qty += 1;
    } else {
      // New item → set qty to 1 only once
      item.qty = 1;
      this.cart.push(item);
    }

    localStorage.setItem('carts', JSON.stringify(this.cart));
  }

  getItem():any{
    return this.cart;
  }
  getTotal():any{
    let total =0;
    this.cart.forEach((item:{price:number; qty:number})=>{
      total+=item.price*item.qty;
    });
    return total;
  }
  removeItem(item:any){
    this.cart.splice(this.cart.indexOf(item),1);
    localStorage.setItem('carts',JSON.stringify(this.cart));
  }

  incrementQty(item:any){
    let index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart[index].qty++
      localStorage.setItem('carts',JSON.stringify(this.cart));
    }
  }

  descrementQty(item:any){
    let index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart[index].qty--
      localStorage.setItem('carts',JSON.stringify(this.cart));
    }
  }
}
