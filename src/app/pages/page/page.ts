import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class Page {
  init() {
    let vari: any;

    vari = 'Hello, world!';

    return vari;
  }
}
