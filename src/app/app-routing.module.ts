import { NgModule, Component } from '@angular/core';
import {Route, Routes,  RouterModule} from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from './shares/fallback-Route';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
