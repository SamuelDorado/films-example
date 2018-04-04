import { AuthService } from './../login/services/auth.service';
import { CanLoad, Route, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private authService: AuthService,private router: Router){}
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        if(this.authService.isAuthenticated()){
            return this.authService.isAuthenticated()
        }else{
            this.router.navigate(['login'])
        }
    }
}