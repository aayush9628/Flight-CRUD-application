import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingListService } from './booking-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  flights: any;

  ngOnInit(): void {
    this.service.getBooking().subscribe(response => {
      this.flights = response;
    });
  }
  constructor(
    private service: BookingListService,
    private router: Router
  ){}

  @Output() page = new EventEmitter<number>();
  @Input() id: any;
  
  deleteBooking(id:any){
    this.router.navigate(['/home']);
    this.page.emit(1);
    this.service.deleteBooking(id).subscribe();
  }
  goBackToHome(){
    this.page.emit(1);
    this.router.navigate(['/home']);
  }
}
