import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { AppointmentsComponent as  AppointmentsComponentPatients} from 'src/app/components/appointments-patients/appointments.component';
import { AppointmentsComponent as  AppointmentsComponentDoctors} from 'src/app/components/appointments-doctors/appointments.component';
import { AppointmentInstanceComponent } from 'src/app/components/appointment-instance/appointment-instance.component';
import { AppointmentFeedbackComponent } from 'src/app/components/appointment-feedback/appointment-feedback.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { OnboardComponent } from 'src/app/components/onboard/onboard.component';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent as FeedbackComponentPatients } from 'src/app/components/appointments-patients/feedback/feedback.component';
import { PrescriptionComponent as PrescriptionComponentPatients } from 'src/app/components/appointments-patients/prescription/prescription.component';
import { FeedbackComponent as FeedbackComponentDoctors } from 'src/app/components/appointments-patients/feedback/feedback.component';
import { PrescriptionComponent as PrescriptionComponentDoctors } from 'src/app/components/appointments-patients/prescription/prescription.component';


@NgModule({
  declarations: [
    AppointmentsComponentPatients,
    AppointmentsComponentDoctors,
    AppointmentInstanceComponent,
    AppointmentFeedbackComponent,
    FeedbackComponentPatients,
    PrescriptionComponentPatients,
    FeedbackComponentDoctors,
    PrescriptionComponentDoctors,
    LoginComponent,
    RegisterComponent,
    OnboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatDialogModule
  ]
})
export class CoreModule { }
