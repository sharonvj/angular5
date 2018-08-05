import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NewemployeesComponent } from './newemployees/newemployees.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';


const routes: Routes = [
  {
        path: 'newemployee',
        component: NewemployeesComponent,
  },
  {
        path: 'allemployee',
        component: AllemployeesComponent,
  }

];



@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [NewemployeesComponent,AllemployeesComponent],
  exports:[RouterModule]
})


export class HrmRouting {
}
