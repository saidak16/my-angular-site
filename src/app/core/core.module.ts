import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './componets/footer/footer.component';
import { UserService } from './Services/user.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [  
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
