import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }
 /* login(){
    if (this.user && this.password){
      this.loginService.auth(this.user,this.password).take(1).subscribe(()=>{
        
      })
    }
  }*/
}
