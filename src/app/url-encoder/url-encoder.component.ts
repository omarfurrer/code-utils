import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-url-encoder',
  templateUrl: './url-encoder.component.html',
  styleUrls: ['./url-encoder.component.scss']
})
export class UrlEncoderComponent implements OnInit {

  stringToEncode = '';
  encodedString = '';

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {
  }

  encodeBase64(stringToEncode: string): void {
    this.encodedString = this.utilitiesService.encodeUrl(stringToEncode);
  }

}
