import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService {
  productList: any;

  constructor(private router: Router) {


  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    this.productList = JSON.parse(localStorage.getItem("product_list"));

    if (!this.productList) {
      alert('You are not allowed to view this page. You are redirected to Home Page');

      this.router.navigate(["home"]);
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    return true;
  }
}
