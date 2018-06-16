
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
  }

];

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [SigninComponent,HomeComponent, SignupComponent],
  exports:[RouterModule]
})
export class AccountRouting { }