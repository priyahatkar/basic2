import { Component, OnDestroy, OnInit } from '@angular/core';

const cl = console.log;


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public isDisabled: boolean = true;
  public productStatus : string = "no product is added yet"
  public cartCount : number = 0;
  public searchName !: string;
  constructor() { 
    cl("constructor of products comp is called")

  }

  ngOnInit(): void {
    cl("comp products is init")
    setTimeout(() =>{
      this.isDisabled = !this.isDisabled;
    }, 1000)
  }
    
  onProductAdd(){
    cl("Btn is clicked !!!");
    this.cartCount++;
    
    if(this.cartCount === 1){
      this.productStatus =  `<strong>${this.cartCount}</strong> Product is Added in Cart !!!`;
    }else{
      this.productStatus =  `<strong>${this.cartCount}</strong> Products are Added in Cart !!!`;
    }
  }

  onProductSearch(eve : Event){
    // cl("Input Event Works")
    // cl(eve.target.value)
    let val = (eve.target as HTMLInputElement).value;
    cl(val)
    this.searchName = val;
    // cl("searchName", this.searchName)
  }

  onProductRemove(){
    this.cartCount--;
    if(this.cartCount < 1){
      this.productStatus =  `No Product is Added Yet`;
    }else{
      this.productStatus =  `<strong>${this.cartCount}</strong> Products are Added in Cart !!!`;
    }
  }

  ngOnDestroy(): void {

  }

}
