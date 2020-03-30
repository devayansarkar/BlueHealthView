import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  isAppointmentCreated = false;
  isFormOpen = false;
  isSearchOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  addAppointment(){
    this.isAppointmentCreated = true;
    this.isFormOpen = false;
    this.isSearchOpen = false;
  }
 
  openForm(){
    this.isAppointmentCreated = false;
    this.isFormOpen = true;
    this.isSearchOpen = false;
  }

  searchSlots(){
    this.isAppointmentCreated = false;
    this.isFormOpen = false;
    this.isSearchOpen = true;
  }
}
