
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewreportComponent } from './report/newreport/newreport.component';
import { GraphComponent } from './report/graph/graph.component';
import { PieChartComponent } from './shared/pie-chart-component/pie-chart-component.component';

const routes: Routes = [
  {
        path: '',
        component: SigninComponent,
  },
  {
        path: 'signup',
        component: SignupComponent,
  },
  {
        path: 'home',
        component: HomeComponent,
        children:[
          {
            path: '',
            redirectTo: 'newreport',
            pathMatch: 'full'
          },
          {
            path: 'newreport',
            component: NewreportComponent,
          },
          {
            path: 'graph',
            component: GraphComponent,
          }
        ]
  }

];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [SigninComponent,HomeComponent, SignupComponent, NewreportComponent, GraphComponent,PieChartComponent],
  exports:[RouterModule]
})
export class AccountRouting { }