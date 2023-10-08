import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from './flight';
import { AddFlightService } from './add-flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit{
  constructor(
    private router: Router,
    private service: AddFlightService
  ){}
  ngOnInit(): void {
    
  }
  @Output() page = new EventEmitter<number>();
  @Output() flightDetails = new EventEmitter();

  flightModel = new Flight(0, "", "", "", 0);
  returnedFlightModel: any;
  backToHome(){
    this.page.emit(1);
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.service.addFlight(this.flightModel).subscribe(
      response => {
        this.returnedFlightModel = response;
        this.flightDetails.emit(this.returnedFlightModel);
        this.backToHome();
      }
    );
  }
}
