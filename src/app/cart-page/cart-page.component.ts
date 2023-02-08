import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  public msg: string;
  public color: string;
  formHandle(message: string){
    console.log("on click...");
  
    if(message=="KHEL50"){
       this.msg="Promo code applied!";
       this.color="green";
    }else{
      this.msg="Invalid Promo! Try KHEL50";
      this.color="red";
    }
    }
}
