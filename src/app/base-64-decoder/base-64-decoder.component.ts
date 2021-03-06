import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-base-64-decoder',
  templateUrl: './base-64-decoder.component.html',
  styleUrls: ['./base-64-decoder.component.scss']
})
export class Base64DecoderComponent implements OnInit {

  stringToDecode = '';
  decodedString = '';

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {
  }

  decodeBase64(stringToDecode: string): void {
    this.decodedString = this.utilitiesService.decodeBase64(stringToDecode);
  }

}
