import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-64-encoder',
  templateUrl: './base-64-encoder.component.html',
  styleUrls: ['./base-64-encoder.component.scss']
})
export class Base64EncoderComponent implements OnInit {

  stringToEncode = '';
  encodedString = '';

  constructor() { }

  ngOnInit() {
  }

  encodeBase64(stringToEncode: string): void {
    this.encodedString = btoa(encodeURIComponent(stringToEncode));
  }

}
