import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  showError = false;

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
  }
  login(){
    if (this.user && this.password){
      this.authService.authenticate(this.user,this.password).take(1).subscribe((response)=>{
        if(response){
          this.router.navigate(['/films'])
        }else{
          this.showError = true
        }              
      })
    }else {
      alert('Introduzca usuario y contraseña')
    }
  }
}
