import { Product } from './common/product';
import { Observable } from 'rxjs/Observable';
import { Album } from './common/album';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {
  private albumUrl = './assets/album.json';
  private productUrl = './assets/products.json';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumUrl);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
