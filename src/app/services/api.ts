import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = 'https://dummyjson.com';
  private productsCache: any[] | null = null;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    if (this.productsCache) {
      return of({ products: this.productsCache });
    }

    return this.http.get<any>(`${this.baseUrl}/products`).pipe(
      tap(res => {
        this.productsCache = res.products;
      })
    );
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  getCarts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/carts`)
  }
}
