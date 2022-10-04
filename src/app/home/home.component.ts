import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
    <p class="title">
      Hello from Home!
    </p>
    </div>
  </div>
</section>
  `,
  styles: [`
  .hero {
    background-image: url('/assets/img/sky.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
