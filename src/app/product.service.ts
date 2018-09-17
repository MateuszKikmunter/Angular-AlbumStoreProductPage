import { Observable } from 'rxjs/Observable';
import { Album } from './common/album';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class ProductService {
  private _albumUrl = './assets/album.json';
  constructor(private http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(this._albumUrl).pipe(filter((a: Album) => a.id === id));
  }
}
