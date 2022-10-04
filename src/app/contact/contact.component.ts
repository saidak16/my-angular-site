import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">

    <div class="hero-body">
      <div class="container">
        <h1 class="title">Contact US!</h1>
        </div>
        </div>

    </section>

    <section class="section">
      <div class="container">
        <form (ngSubmit)="SubmitForm()" #contactForm="ngForm">
          <div class="filed">
            <label class="label">
              Name
            </label>
            <input type="text"
             class="input"
              name="name" 
              placeholder="Name"
               [(ngModel)]="name"
               #nameInput = "ngModel"
               required>

               <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
                 Your name is Requierd
               </div>
            </div>
            
            <div class="filed">
            <label class="label">
              Email
            </label>
            <input type="email"
             class="input"
              name="email"
               placeholder="example@domain" 
               [(ngModel)]="email"
               #emailInput = "ngModel"
               required
               email>

               <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
                 Email is not valid.
               </div>
            </div>

            <div class="filed">
            <label class="label">
              Your Message
            </label>
            <textarea class="textarea" name="message" placeholder="message" [(ngModel)]="message">
            </textarea>
            </div>
<br>
            <button type="submit" 
            class="button is-large is-info" 
            [disabled]="contactForm.invalid">
              Send!
            </button>
          </form>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
name: string ="";
email: string ="";
message: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  SubmitForm(){
    const msg = 'My name is ' + this.name + '! and my email is ' + this.email + ', and my message is ' + this.message;
    alert(msg);
  }

}
