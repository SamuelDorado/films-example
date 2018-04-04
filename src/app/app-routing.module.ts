import { Routes,RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login-component/login.component';
import { FilmsContainerComponent } from './films/films-container/films-container.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path:'films' ,component:FilmsContainerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}