import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from './../product.service';
import { Album } from '../common/album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() album: Album;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
}
