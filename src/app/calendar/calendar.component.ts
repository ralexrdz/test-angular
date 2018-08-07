import { Component, OnInit } from '@angular/core';
// import { $ } from 'jquery'
import * as $ from 'jquery'
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#calendar').fullCalendar({
      // put your options and callbacks here
    })
  }

}
