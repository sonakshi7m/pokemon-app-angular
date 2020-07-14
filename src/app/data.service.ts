import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data = {};

  setOption(option, value) {
    this.data[option] = value;
    console.log(this.data)
  }

  getOption() {
    return this.data;
  }
}
