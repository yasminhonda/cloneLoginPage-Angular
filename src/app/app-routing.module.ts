import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';

const routes: Routes = [
  {path: '', component: Test1Component},
  {path: 'new', component: Test2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
