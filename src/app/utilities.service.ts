import { Injectable } from '@angular/core';
// Exposing crypto module from node for true random number generation https://github.com/angular/angular-cli/issues/1548
declare var require: any;
const crypto: any = require('crypto');

@Injectable()
export class UtilitiesService {

  constructor() { }

  encodeBase64(toEncode: string): string {
    return btoa(toEncode);
  }

  decodeBase64(toDecode: string): string {
    return atob(toDecode);
  }

  encodeUrl(toEncode: string): string {
    return encodeURI(toEncode);
  }

  decodeUrl(toDecode: string): string {
    return decodeURI(toDecode);
  }

  countStringLength(toCount: string): number {
    return toCount.length;
  }

  generateRandomString(length: number): string {
    return crypto.randomBytes(Math.ceil(length/2))
         .toString('hex') // convert to hexadecimal format
         .slice(0,length);   // return required number of characters
  }


}
