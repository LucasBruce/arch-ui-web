import { Component } from '@angular/core';

@Component({
  selector: 'arch-app-hellow',
  imports: [],
  template: `
    <p>Hellow works!</p>
    <h1>{{ this.init() }}</h1>
  `,
})
export class HellowPage {
  init() {
    const vari = 'Hello, world!';

    return vari;
  }
}
