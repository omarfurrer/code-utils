import { Injectable } from '@angular/core';

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

}
