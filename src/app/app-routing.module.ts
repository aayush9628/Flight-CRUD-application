import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { BookingListComponent } from './booking-list/booking-list.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch:'full'},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "addFlight", component: AddFlightComponent},
  {path: "bookFlight", component: BookFlightComponent},
  {path: "updateFlight", component: UpdateFlightComponent},
  {path: "bookingList", component: BookingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
