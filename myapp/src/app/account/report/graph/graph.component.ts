import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }
  pieData = [1, 2, 3, 4, 5,10];

  ngOnInit() {
  }

}
