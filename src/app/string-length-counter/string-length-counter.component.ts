import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../utilities.service';

@Component({
  selector: 'app-string-length-counter',
  templateUrl: './string-length-counter.component.html',
  styleUrls: ['./string-length-counter.component.scss']
})
export class StringLengthCounterComponent implements OnInit {

  stringToCount = '';
  stringCount = 0;

  constructor(private utilitiesService: UtilitiesService) { }

  ngOnInit() {
  }

  countStringLength(stringToCount: string): void {
    this.stringCount = this.utilitiesService.countStringLength(stringToCount);
  }




}
