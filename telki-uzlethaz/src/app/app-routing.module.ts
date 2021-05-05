import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component';


const routes: Routes = [
{
  path: '',
  component: BodyComponent
},
{
  path: 'body2',
  component: Body2Component
},
{
  path:'**',
  component: BodyComponent,
  redirectTo: ''

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
