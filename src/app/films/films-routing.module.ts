import { FilmsContainerComponent } from './films-container/films-container.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: FilmsContainerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class FilmsRoutingModule {
}