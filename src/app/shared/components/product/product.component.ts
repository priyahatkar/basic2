import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productName: string = "samsung";
  public productId: number = 100;
  public pStatus: string = "In-transition";
  public skillName: string = "Angular";
  constructor() { }

  ngOnInit(): void {}
  
  getProductId(){
    return this.productId;
  }

}
