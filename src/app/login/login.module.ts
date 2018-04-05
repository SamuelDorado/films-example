import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  providers:[AuthService]
})
export class LoginModule { }
