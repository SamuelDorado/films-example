import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login.component';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [LoginComponent],
  providers:[AuthService]
})
export class LoginModule { }
