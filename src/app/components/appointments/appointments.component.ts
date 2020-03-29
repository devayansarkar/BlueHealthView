import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  isAppointmentCreated = false;
  constructor() { }

  ngOnInit(): void {
  }

  addAppointment(){
    this.isAppointmentCreated = true;
  }
}
