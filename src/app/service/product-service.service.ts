import { Injectable } from '@angular/core';
declare const axios:any;
declare const $:any;

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() {
    let vm =this;
    $.LoadingOverlay("show", {
      image: "/slider/product.png", // cartoon-style loader image
      imageAutoResize: true,
      imageAnimation: "1 s fadein",
      background: "rgba(255, 255, 255, 0.7)", // bright, cartoon-like background
      size: 500,
      zIndex: 9999,
      text: "Product Loading...",
      textColor: "#000",
      textResize: "22px"
    });

    axios.get(this.url)
      .then(function (response:any) {
        // handle success
        console.log(response.data);
        vm.products = response.data;
      })
      .catch(function (error:any) {
        // handle error
        console.log(error);
      }).finally(function(){$.LoadingOverlay("hide");})
  }

  private products:any = [];
  private url:string='https://sv-gen-api.bczin2zin2takeo.us/api/product';

  getProducts(){

    return this.products;
  }

}
