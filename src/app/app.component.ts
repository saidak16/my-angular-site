import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
   <!--header-->
   <app-header></app-header>
   <!--get injection here-->
    <router-outlet></router-outlet>

    <!--footer-->
   <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
