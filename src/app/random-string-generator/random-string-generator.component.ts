import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-random-string-generator',
  templateUrl: './random-string-generator.component.html',
  styleUrls: ['./random-string-generator.component.scss']
})
export class RandomStringGeneratorComponent implements OnInit {

  randomString = '';
  stringLength = 1;

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {

  }

  generateRandomString(length: number) {
    this.randomString = this.utilitiesService.generateRandomString(length);
  }

}
