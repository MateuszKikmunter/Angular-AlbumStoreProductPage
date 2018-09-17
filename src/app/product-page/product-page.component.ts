import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Album } from './../common/album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  private album: Album;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    let albumId = this.route.snapshot.params['id'];
    this.productService.getAlbums().subscribe(a => this.album = a.find(a => a.id === +albumId));
  }
}
