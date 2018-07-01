import { Component, OnInit } from '@angular/core';
import { Account }  from './../account';
import {Router} from "@angular/router";
import { AccountService }  from './../account.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AccountService]
})
export class SignupComponent implements OnInit {

  account = new Account('','');
  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit() {
  }

  doSignup(isValid) {
   if(isValid) {
     this.accountService.doSignup(this.account)
      .subscribe(response => {
        if(response['status'] == 'success')
             this.router.navigate([''])
      });
   }
   else {

   }
  }

}
