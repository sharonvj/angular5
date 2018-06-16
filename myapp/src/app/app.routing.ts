import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
        path: '',
        redirectTo: '/account',
        pathMatch: 'full'
  },
  {
        path: 'account',
        loadChildren: './account/account.module'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouting { }