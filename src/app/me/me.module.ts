import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import { MeRoutingModule } from './me-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MeRoutingModule
  ],
  declarations: [UserDataComponent]
})
export class MeModule { }
