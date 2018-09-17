import { Product } from './common/product';
import { Observable } from 'rxjs/Observable';
import { Album } from './common/album';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class ProductService {
  private albumUrl = './assets/album.json';
  private productUrl = '../assets/product.json';

  constructor(private http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(this.albumUrl).pipe(filter((a: Album) => a.id === id));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
