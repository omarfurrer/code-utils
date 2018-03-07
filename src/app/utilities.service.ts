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

}
