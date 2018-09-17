import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Album } from '../common/album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  private album: Album;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAlbum(1).subscribe(a => this.album = a);
  }
}
