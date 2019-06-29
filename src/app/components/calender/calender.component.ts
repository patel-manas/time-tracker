import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tt-calender",
  templateUrl: "./calender.component.html",
  styleUrls: ["./calender.component.css"]
})
export class CalenderComponent implements OnInit {
  calDays: any[] = [];
  todayDate: number;
  displayInfo: boolean = false;
  loggedOut: boolean = false;
  isOnBreak = false;
  wentOnBreak: boolean = false;
  loggedInTime: Date = new Date();
  loggedOutTime: Date = new Date();
  _breaks: {desc: string, display: boolean, time:any[]}[] = [];
  _month: string;
  _year: string;
  _MonthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec' ] ;
  constructor() {}

  ngOnInit() {
    const currentYear = (new Date()).getFullYear();
    const currentMonth = (new Date()).getMonth();
    this._month = this._MonthMap[currentMonth];
    this._year = ''+currentYear;
    this.initializeCalender(currentMonth,currentYear,false);
    console.log({ caldays: this.calDays,todayDate:this.todayDate });
  }
  getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  dayClickHandler(event) {
    console.log('dayClickHandler', event);
  }

  initializeCalender(month: number, year: number, fromNewDate?: boolean) {
    const currentDay =  new Date();

    const daysOfMonth = this.getDaysInMonth(month, year);
    this.calDays = daysOfMonth.map(day => {
        return {
          date: day.getDate(),
          day: day.getDay()
        }
    });

    if( currentDay.getDay() > 0 && currentDay.getDay() <= 6 ) {
      this.todayDate = currentDay.getDay();
    } else {
      this.todayDate = 7
    }

  }
  loggedIn(clock) {
    console.log({clock});
    console.log(clock.getTime());
    this.loggedInTime = clock.getTime();
    this.displayInfo = true;
  }

  takeBreak(clock) {
    console.log({clock});
    console.log(clock.getTime());
    const breakTime = clock.getTime();
    const reason = prompt('reason');
    let _break = {
      desc: reason,
      display: false,
      time: [breakTime, breakTime]
    };
    this._breaks.push(_break);
    this.isOnBreak = true;
  }
  resume(clock) {
    console.log({clock});
    console.log(clock.getTime());
    const resumeTime = clock.getTime();
    this._breaks[this._breaks.length - 1].time[1] = resumeTime;
    this._breaks[this._breaks.length - 1].display =  true;
    this.wentOnBreak = true;
    this.isOnBreak = false; 

  }
  logout(clock) {
    console.log({clock});
    console.log(clock.getTime());
    this.loggedOutTime = clock.getTime();

    this.loggedOut = true;

  }
}
