import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AccountService }  from './../account.service';
import { Account }  from './../account';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AccountService]
})
export class SigninComponent implements OnInit {
  
  account = new Account('','');

  constructor(private accountService: AccountService,private router:Router) { }
  
  ngOnInit() {
  }

  doSignin() {
    this.accountService.doSignin(this.account)
    .subscribe(response => {
         if(response.status == 'success')
           this.router.navigate(['./home'])
    });
  }

}
