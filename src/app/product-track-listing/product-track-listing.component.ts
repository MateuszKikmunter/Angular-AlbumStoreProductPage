import { Track } from './../common/track';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-track-listing',
  templateUrl: './product-track-listing.component.html',
  styleUrls: ['./product-track-listing.component.css']
})
export class ProductTrackListingComponent implements OnInit {
  @Input() tracks: Track[];

  constructor() { }

  ngOnInit() {
  }

}
