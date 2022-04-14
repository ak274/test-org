import { Component } from '@angular/core';

@Component({
  selector: 'test-org-login-entry',
  template: `<div class="remote-entry">
    <h2>login's Remote Entry Component</h2>
    <test-org-form></test-org-form>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
