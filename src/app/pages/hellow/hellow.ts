import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'arch-app-hellow',
  imports: [MatIconModule],
  template: `
    <p>Hellow works!</p>
    <h1>{{ this.init() }}</h1>
    <button type="button" class="btn btn-success">Success</button>
    <div style="display: flex; gap: 16px; margin-top: 24px;">
      <i class="pi pi-check"></i>
      <i class="pi pi-times"></i>
      <span class="pi pi-search"></span>
      <span class="pi pi-user"></span>
    </div>
  `,
})
export class HellowPage {
  init() {
    const vari = 'Hello, world!';

    return vari;
  }
}
