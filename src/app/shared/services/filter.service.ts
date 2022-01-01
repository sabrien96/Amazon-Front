import { IProduct } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  _url = "";
  //   productList=[
  //     {
  //     price:100,
  //     name:'price1'
  //    },
  //     {
  //     price:10000,
  //     name:'price2'
  //    },
  //     {
  //     price:1000,
  //     name:'price3'
  //    },
  //     {
  //     price:500,
  //     name:'price4'
  //    },
  //     {
  //     price:200,
  //     name:'price5'
  //    },
  //     {
  //     price:250,
  //     name:'price6'
  //    },
  // ];
  productList:Array<IProduct>=[];
  constructor(private http: HttpClient) {
    this.getAllProducts().subscribe((data) => {
     this.productList=data;
    });
  }
  //get all categories
  getAllCategory() {
    this._url = `${env.api}filter/category`;
    return this.http.get<any>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }
  //get all sub-categories by category id
  getAllSubcategoryByCateId(CateId: any) {
    this._url = `${env.api}filter/subcategory/${CateId}`;
    return this.http.get<any>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }
  //get all sub-categories by category name
  getAllSubcategoryByName(cateName: any) {
    this._url = `${env.api}filter/subcategoryarr/${cateName}`;
    return this.http.get<any>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }
  //get all products by category name
  getProductByCategory(categoryName: any): Observable<IProduct[]> {
    this._url = `${env.api}products/bycategory/${categoryName}`;
    return this.http.get<IProduct[]>(this._url).pipe(catchError(err => { return throwError(err.message) }));
  }

  //get all products by sub category name
  getProductsBySubcategory(SubcategoryName: any): Observable<IProduct[]> {
    this._url = `${env.api}products/bysubcategory/${SubcategoryName}`;
    return this.http.get<IProduct[]>(this._url).pipe(catchError(err => { return throwError(err.message); }))
  }
  //get all products
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${env.api}products`).pipe(
      catchError(err => { return throwError(err.message); })
    )
  }




}
