import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  showError = false;
  myForm: FormGroup;

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      address: new FormGroup({
          street: new FormControl('', <any>Validators.required),
          postcode: new FormControl('8000')
      })
  });
      const people = {
        name: 'Jane',
        address: {
            street: 'High street',
            postcode: '94043'
        }
    };

    this.myForm.setValue(people, { onlySelf: true });
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
    }
  }
}
