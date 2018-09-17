import { Album } from './../common/album';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  private album: Album;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAlbum(1).subscribe(a => this.album = a);
    }

}
