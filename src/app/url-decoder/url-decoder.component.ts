import { Component, OnInit } from '@angular/core';
import {UtilitiesService} from '../utilities.service';

@Component({
  selector: 'app-url-decoder',
  templateUrl: './url-decoder.component.html',
  styleUrls: ['./url-decoder.component.scss']
})
export class UrlDecoderComponent implements OnInit {

  stringToDecode = '';
  decodedString = '';

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {
  }

  decodeBase64(stringToDecode: string): void {
    this.decodedString = this.utilitiesService.decodeUrl(stringToDecode);
  }

}
