import { Component, OnInit } from '@angular/core';
import { AccountService }  from './../../account.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-newreport',
  templateUrl: './newreport.component.html',
  styleUrls: ['./newreport.component.css'],
  providers: [AccountService]
})
export class NewreportComponent implements OnInit {

  report :any = {reportname:''};
  reportList :any = [];
  socket: any;

  constructor(private accountService: AccountService) { 
     this.socket = io.connect('http://localhost:8000');
  }
  ngOnInit() {
    this.getReports();
    console.log(this.socket)
    this.socket.on('reportlist', (data) => {
      this.reportList = data;
    });
  }
  getReports() {
     this.accountService.getReports()
      .subscribe(response => {
       this.reportList = response;
      });
  };
  addReport() {
     this.accountService.addReport(this.report)
      .subscribe(response => {
      });
  };

}
