import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct={
    pId:"",
    pName:"",
    pCost:"",
    qty:""
  }
  qty:any;
  constructor() { }
   addcart(){
     console.log(this.selectedProduct);
     
   }
  ngOnInit() {
  }

}
