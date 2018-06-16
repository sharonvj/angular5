import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppRouting } from './app.routing';
import { AccountModule } from './account/account.module';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppBootstrapModule,
    AccountModule,
    AppRouting,
  ],
  providers: [],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
