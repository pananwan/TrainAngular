import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productlist = [{
    pId : "0001",
    pName : "แปรงสีฟัน",
    pCost : 200,
    img : "https://www.watsons.co.th/medias/sys_master/front/zoom/8945078206494.jpg"
  },
  {
    pId : "0002",
    pName : "แก้วน้ำ",
    pCost : 10,
    img : "https://www.ikea.com/th/th/images/products/pokal-pho-khxl-k-w-na-si-the-xrkh-wxys__0550429_PE658170_S4.JPG"
  },
  {
    pId : "0003",
    pName : "ยาสีฟัน",
    pCost : 20,
    img : "https://static.bigc.co.th/media/catalog/product/cache/2/image/497x497/9df78eab33525d08d6e5fb8d27136e95/8/8/8850006232019.jpg"
  }];
selectedProduct : any;
selectProduct(p){
  this.selectedProduct = p;
  console.log(p);
}
 constructor(){

 }
}