import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/services/auth.service';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login-component/login.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {
        path:'films' ,
        loadChildren: './films/films.module#FilmsModule',
        canLoad: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}