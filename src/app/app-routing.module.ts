import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"edit/:i",component:EditComponent},
  {path:"product",component:ProductComponent},
  {path:"",redirectTo:"product",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
