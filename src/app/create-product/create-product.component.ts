import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Products } from '../services/products/products';
//import { ProductsService } from '../services/products/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  products = [];
  categories = ['Electronics', 'Cloths', 'Blanket'];
  form = this.formBuilder.group({
    id: [''],
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[ a-zA-Z0-9]*'),
      ],
    ],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[ a-zA-Z0-9]*'),
      ],
    ],
    price: [
      '',
      [Validators.required, Validators.pattern('[0-9]*')],
    ],
    category: ['', Validators.required],
    imageUrl: [
      '',
      [
        Validators.required,
        Validators.pattern('[^\\s]+(\\.(jpg|png|gif|bmp))$'),
      ],
    ],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('[0-9]*'),
      ],
    ],
    select: [''],
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  save(product: Products, formDirective: FormGroupDirective) {
    var storedProducts = JSON.parse(localStorage.getItem("product_list"));
    if (storedProducts) {
      storedProducts.push(product);
      localStorage.setItem('product_list', JSON.stringify(storedProducts))
    } else {
      this.products.push(product);
      localStorage.setItem('product_list', JSON.stringify(this.products))
    }


    console.log(product)
    formDirective.resetForm();

  }

  // create(product: Products) {
  //   this.productsService.createProduct(product).subscribe(() => {
  //     this.router.navigate(['products', 'list']);
  //   });
  // }

  // update(product: Products) {
  //   this.productsService.updateProduct(product).subscribe(() => {
  //     this.router.navigate(['products', 'list']);
  //   });
  // }

  reset() {
    this.form.reset();
    this.form.markAsPristine();
  }

}
