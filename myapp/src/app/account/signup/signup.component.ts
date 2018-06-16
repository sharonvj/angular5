import { Component, OnInit } from '@angular/core';
import { Account }  from './../account';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account = new Account('','');
  constructor() { }

  ngOnInit() {
  }

}
