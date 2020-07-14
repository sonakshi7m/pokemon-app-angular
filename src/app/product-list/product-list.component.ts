import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any;
  constructor() { }

  ngOnInit(): void {
    this.productList = JSON.parse(localStorage.getItem("product_list"));
  }

}
