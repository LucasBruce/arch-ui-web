import { Component } from '@angular/core';

@Component({
  selector: 'arch-app-page',
  imports: [],
  template: `
    <p>page works!</p>
    <h1>{{ this.init() }}</h1>
  `,
})
export class Page {
  init() {
    const vari = 'Hello, world!';

    return vari;
  }
}
