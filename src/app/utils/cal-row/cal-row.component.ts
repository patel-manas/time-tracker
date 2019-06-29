
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tt-cal-row',
  templateUrl: './cal-row.component.html',
  styleUrls: ['./cal-row.component.css']
})
export class CalRowComponent implements OnInit {
  @Input('cellDates') cellDates: any[];
  cells: any[] = [];
  @Input('startIndex') startIndex: number;
  @Output('dayClicked') dayClicked: EventEmitter<any> = new EventEmitter<any>();
  todayDate = (new Date()).getDate();
  
  constructor() { }

  ngOnInit() {
    for(let i = 1; i <= 35; i++) this.cells.push(i);
  }
  cellClicked(evt) {
    this.dayClicked.emit(evt);
  }
}
