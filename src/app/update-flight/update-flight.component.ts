import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from './flight';
import { UpdateFlightService } from './update-flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit{
  constructor(
    private router: Router,
    private service: UpdateFlightService
  ){}
  ngOnInit(): void {
    
  }
  @Output() page = new EventEmitter<number>();

  @Output() formValues = new EventEmitter<Flight>();

  @Input() flightId: number = 0;
  flightModel = new Flight(0, "", "", "", 0);

  backToHome(){
    this.page.emit(1);
    this.router.navigate(['/home']);
  }

  onSubmit(){
    this.flightModel.id = this.flightId;
    this.formValues.emit(this.flightModel);
    this.service.updateFlight(this.flightModel).subscribe();
    this.page.emit(1);
  }
}
