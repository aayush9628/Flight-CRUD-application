import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  flights : any;
  constructor(
    private router: Router,
    private service: FlightService
  ){}
  @Output() allow = new EventEmitter<number>();

  updateFlightModel: any;
  addFlightModel: any;
  bookFlightModel: any;

  page: number = 1;
  updateId: number = 0;
  maxId: number = 0;

  ngOnInit(): void {
    this.service.getAllFlights().subscribe(response => {
      this.flights = response;
      // for(let i = 0; i < this.flights.length; i++){
      //   if(this.flights[i].id > this.maxId){
      //     this.maxId = this.flights[i].id;
      //   }
      // }
    });
  }

  updateFlight(id: number){
    this.updateId = id;
    this.pageSelection(4);
    this.router.navigate(['/updateFlight']);
  }
  deleteFlight(id: number){
    this.service.deleteFlight(id).subscribe();
    let index: number = 0;
    for(let i = 0; i < this.flights.length; i++){
      if(this.flights[i].id === id){
        index = i;
        break;
      }
    }
    this.flights.splice(index, 1);
  }
  addFlight(){
    this.pageSelection(2);
    this.router.navigate(['/addFlight']);
  }
  bookFlight(id: number){
    for(let i = 0; i < this.flights.length; i++){
      if(this.flights[i].id === id){
        this.bookFlightModel = this.flights[i];
        break;
      }
    }
    this.pageSelection(3);
    this.router.navigate(['/bookFlight']);
  }

  pageSelection(page: number){
    this.page = page;
  }
  addFlightModelFetch(flight: any){
    this.addFlightModel = flight;
    // console.log(this.addFlightModel);
    this.flights.push(this.addFlightModel);
  }
  updateFlightModelFetch(flight: any){
    this.updateFlightModel = flight;
    for(let i = 0; i < this.flights.length; i++){
      if(this.flights[i].id === this.updateFlightModel.id){
        this.flights[i] = this.updateFlightModel;
        break;
      }
    }
  }

  bookedFlights(){
    this.pageSelection(5);
    this.router.navigate(['/bookingList']);
  }

  logout(){
    this.allow.emit(0);
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
