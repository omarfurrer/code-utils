import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-base-64-encoder',
  templateUrl: './base-64-encoder.component.html',
  styleUrls: ['./base-64-encoder.component.scss']
})
export class Base64EncoderComponent implements OnInit {

  stringToEncode = '';
  encodedString = '';

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {
  }

  encodeBase64(stringToEncode: string): void {
    this.encodedString = this.utilitiesService.encodeBase64(stringToEncode);
  }

}
