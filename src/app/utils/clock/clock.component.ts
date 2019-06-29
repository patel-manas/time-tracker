import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockServiceService } from '../clock-service/clock-service.service';

@Component({
  selector: 'tt-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  name = 'Angular';
  date = new Date();
  h = this.date.getTime();
  private _clockSubscription: Subscription;
  time: Date;

  constructor(private clockService: ClockServiceService) { }

  ngOnInit(): void {
    this._clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }

  getTime() {
    return this.time;
  }

}
