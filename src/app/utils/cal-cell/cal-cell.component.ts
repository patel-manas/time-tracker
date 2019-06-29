import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

const DAYMAP = ['Sunday','Monday','Tuesday','Wednesday','Thurshday','Friday','Saturday', ''];

@Component({
  selector: "tt-cal-cell",
  templateUrl: "./cal-cell.component.html",
  styleUrls: ["./cal-cell.component.css"]
})
export class CalCellComponent implements OnInit {
  @Input('date') date: any;
  @Input('_class') _class: any;
  @Output('onCellClick') onCellClick: EventEmitter<any> = new EventEmitter<any>();
  _dayMap: any[] = new Array(6);
  constructor() {}

  ngOnInit() {
    this._dayMap = DAYMAP;
  }

  cellClicked(evt) {
    this.onCellClick.emit(evt);
  }
}
