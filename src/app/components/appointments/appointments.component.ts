import { Component, OnInit,Inject } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { PrescriptionComponent } from './prescription/prescription.component';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  isAppointmentCreated = false;
  isFormOpen = false;
  isSearchOpen = false;
  name = "Smith";
  constructor(public dialog: MatDialog) {}

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

  openFeedback(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      width: '50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openPrescription(): void {
    const dialogRef = this.dialog.open(PrescriptionComponent,{
      width: '50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}