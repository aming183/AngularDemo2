import { NgModule, Component } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from './shares/fallback-Route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent
    , children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent, canActivate: [LoginGuard] },
      { path: 'cards/:type', component: CardsComponent },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'form1', component: Form1Component },
  { path: 'form2', component: Form2Component },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
